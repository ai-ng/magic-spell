import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";
export const preferredRegion = "sfo1"; // Groq is hosted in San Francisco

const groq = new OpenAI({
	apiKey: process.env.GROQ_API_KEY!,
	baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
	const { text, prompt } = await req.json();

	const response = await groq.chat.completions.create({
		model: "mixtral-8x7b-32768",
		stream: true,
		messages: [
			{
				role: "system",
				content: `You are a text editor. You will be given a prompt and a text to edit, which may be empty or incomplete. Edit the text to match the prompt, and only respond with the full edited version of the text - do not include any other information, context, or explanation. Do not include the prompt or otherwise preface your response.`,
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
