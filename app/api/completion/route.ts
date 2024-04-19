import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit =
	process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
		? new Ratelimit({
				redis: new Redis({
					url: process.env.KV_REST_API_URL,
					token: process.env.KV_REST_API_TOKEN,
				}),
				limiter: Ratelimit.slidingWindow(10, "5 m"),
				analytics: true,
		  })
		: false;

const groq = new OpenAI({
	apiKey: process.env.GROQ_API_KEY!,
	baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
	if (ratelimit) {
		const ip = req.headers.get("x-real-ip") ?? "local";
		const rl = await ratelimit.limit(ip);

		if (!rl.success) {
			return new Response("Rate limit exceeded", { status: 429 });
		}
	}

	const { text, prompt } = await req.json();
	if (!prompt) return new Response("Prompt is required", { status: 400 });

	const response = await groq.chat.completions.create({
		model: "llama3-8b-8192",
		stream: true,
		messages: [
			{
				role: "system",
				content: `You are a text editor. You will be given a prompt and a text to edit, which may be empty or incomplete. Edit the text to match the prompt, and only respond with the full edited version of the text - do not include any other information, context, or explanation. If you add on to the text, respond with the full version, not just the new portion. Do not include the prompt or otherwise preface your response. Do not enclose the response in quotes.`,
			},
			{
				role: "user",
				content: `Prompt: ${prompt}\nText: ${text}`,
			},
		],
	});

	const stream = OpenAIStream(response);
	return new StreamingTextResponse(stream);
}
