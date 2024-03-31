import { GeistSans } from "geist/font/sans";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Magic Spell",
	description: "AI powered text editing at lightning fast speed.",
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
				className={`${GeistSans.className} flex flex-col w-screen justify-center h-screen items-center bg-gray-50 dark:bg-gray-950 text-black dark:text-white px-3 my-3`}
			>
				{children}
			</body>
		</html>
	);
}
