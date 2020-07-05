import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ToDoContext } from "../context/ToDoContext";

export default function ToDoDetails() {
	const { changeToDo } = useContext(ToDoContext);
	let { id } = useParams();
	const [title, setTitle] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			changeToDo({ id, title });
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
