import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { WandIcon } from "@/app/icons";

export const metadata: Metadata = {
	title: "Magic Spell",
	description: "AI prompting built into your <textarea>",
	metadataBase: new URL("https://magic-spell.vercel.app"),
	twitter: {
		card: "summary_large_image",
	},
};

export const viewport: Viewport = {
	maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-gray-50 dark:bg-gray-950 text-black dark:text-white flex flex-col items-center px-3 py-10 min-h-dvh`}
			>
				<Toaster richColors theme="system" />

				<h1 className="font-semibold text-xl flex items-center justify-center">
					<WandIcon />

					<span className="bg-gradient-to-b dark:from-gray-50 dark:to-gray-200 from-gray-950 to-gray-800 bg-clip-text text-transparent ml-3">
						Magic Spell
					</span>
				</h1>

				<p className="mt-3 text-center font-mono">
					AI prompting built into your{" "}
					<strong className="bg-yellow-200 text-black dark:bg-yellow-300 rounded">
						&lt;textarea&gt;
					</strong>
				</p>

				{children}

				<footer className="text-center text-sm dark:text-gray-400 text-gray-600 font-mono">
					<p>
						<A href="https://github.com/ai-ng">ai-ng</A> /{" "}
						<A href="https://nickoates.com">nick oates</A>
					</p>
					<p>
						Built with{" "}
						<A href="https://sdk.vercel.ai">Vercel AI SDK</A> &{" "}
						<A href="https://groq.com">Groq</A>
					</p>
					<p>
						<A href="https://github.com/ai-ng/magic-spell">
							source
						</A>{" "}
						/{" "}
						<A href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fai-ng%2Fmagic-spell&env=GROQ_API_KEY&envDescription=Groq%20API%20key%20from%20https%3A%2F%2Fconsole.groq.com%2Fkeys&project-name=magic-spell&repository-name=magic-spell&demo-title=Magic%20Spell&demo-description=AI%20prompting%20built%20into%20your%20%3Ctextarea%3E&demo-url=https%3A%2F%2Fmagic-spell.vercel.app&demo-image=https%3A%2F%2Fmagic-spell.vercel.app%2Fopengraph-image.png">
							deploy
						</A>
					</p>
				</footer>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

function A(props: any) {
	return (
		<a {...props} className="text-black dark:text-white hover:underline" />
	);
}
