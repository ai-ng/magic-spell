import Form from "@/app/form";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-between p-3">
			<div className="text-center">
				<h1 className="font-extrabold text-3xl md:text-4xl bg-gradient-to-b dark:from-gray-50 dark:to-gray-200 from-gray-950 to-gray-800 bg-clip-text text-transparent mt-20">
					Magic Spell
				</h1>

				<p className="text-lg md:text-xl mt-4">
					AI prompting built into your{" "}
					<strong className="bg-yellow-200 text-black dark:bg-yellow-300">
						&lt;textarea&gt;
					</strong>
					.
				</p>
			</div>

			<Form />

			<footer className="mb-20 text-center md:text-lg dark:text-gray-400 text-gray-600">
				<p>
					<A href="https://github/ai-ng">ai-ng</A> /{" "}
					<A href="https://nickoates.com">nick oates</A>
				</p>
				<p>
					Built with <A href="https://sdk.vercel.ai">Vercel AI SDK</A>{" "}
					& <A href="https://groq.com">Groq</A> -{" "}
					<A href="https://github.com/ai-ng/magic-spell">source</A> /{" "}
					<A href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fai-ng%2Fmagic-spell&env=GROQ_API_KEY&envDescription=Groq%20API%20key%20from%20https%3A%2F%2Fconsole.groq.com%2Fkeys&project-name=magic-spell&repository-name=magic-spell&demo-title=Magic%20Spell&demo-description=An%20AI-powered%20text%20editor%20built%20with%20Next.js%20and%20the%20Vercel%20AI%20SDK%2C%20using%20Groq%20for%20super%20fast%20inference.&demo-url=https%3A%2F%2Fmagic-spell.vercel.app">
						deploy
					</A>
				</p>
			</footer>
		</main>
	);
}

function A(props: any) {
	return (
		<a {...props} className="text-black dark:text-white hover:underline" />
	);
}
