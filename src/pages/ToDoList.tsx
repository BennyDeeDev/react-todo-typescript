import React, { useState } from "react";

export default function ToDoList() {
	const [todo, setTodo] = useState([]);

	const addToDo = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			console.log("Enter", e);
		}
	};

	return (
		<React.Fragment>
			<div className="bg-white mx-auto max-w-xl px-4 py-8">
				<input
					className="w-full rounded-full shadow-sm border border-reactblue"
					placeholder="Add ToDo here"
					onKeyDown={(e: React.KeyboardEvent) => addToDo(e)}
				/>
			</div>
		</React.Fragment>
	);
}
