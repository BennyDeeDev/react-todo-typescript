import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ToDoDetails() {
	let { id } = useParams();
	const [title, setTitle] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			//Redux Logic
		}
	};

	return (
		<div>
			<h1 className="text-xl mb-4">ToDo ID {id}</h1>
			<input
				className="w-full rounded-full shadow-sm border border-reactblue"
				placeholder="change ToDo here"
				value={title}
				onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
			/>
		</div>
	);
}
