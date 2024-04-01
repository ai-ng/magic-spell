"use client";

import { IconLoader2, IconSparkles } from "@tabler/icons-react";
import { useCompletion } from "ai/react";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";

export default function Form() {
	const [text, setText] = useState("");

	const {
		completion,
		input,
		isLoading,
		handleInputChange,
		handleSubmit,
		setInput,
	} = useCompletion({
		body: { text },
		onFinish: (prompt, completion) => setText(completion.trim()),
		onError: (error) => toast.error(error.message),
	});

	// warm up the completion endpoint
	useEffect(() => {
		fetch("/api/completion").catch(() => {});
	}, []);

	return (
		<form
			className="flex flex-col items-center justify-center min-w-full py-3"
			onSubmit={(e) => {
				handleSubmit(e);
				setInput("");
			}}
		>
			<TextareaAutosize
				value={
					isLoading && completion.length > 0
						? completion.trim()
						: text
				}
				onChange={(e) => {
					if (!isLoading) setText(e.target.value);
				}}
				className="rounded-lg drop-shadow-sm bg-gray-100 border border-gray-200 px-2 pt-2 pb-6 md:resize dark:bg-gray-900 dark:border-gray-800 min-w-full max-w-7xl min-h-32 md:min-w-96 focus:outline-none focus:border-blue-300 dark:focus:border-blue-700 transition-colors max-h-[52rem]"
				placeholder="It was a dark and stormy night..."
				aria-label="Text"
				cacheMeasurements
			/>

			<div className="rounded-full drop-shadow-sm bg-gray-100 border border-gray-200 -mt-5 dark:bg-gray-900 dark:border-gray-800 flex focus-within:border-blue-300 dark:focus-within:border-blue-700 transition-colors">
				<input
					className="bg-transparent rounded-full py-1 px-4 focus:outline-none"
					placeholder="Make the text more unique..."
					onChange={handleInputChange}
					value={input}
					autoFocus
					aria-label="Prompt"
					required
				/>

				<button
					aria-label="Submit"
					type="submit"
					className="rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors text-white size-8 md:size-10 flex items-center justify-center"
				>
					{isLoading ? (
						<IconLoader2 className="animate-spin" />
					) : (
						<IconSparkles />
					)}
				</button>
			</div>
		</form>
	);
}
