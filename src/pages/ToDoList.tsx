import React, { useState } from "react";
// eslint-disable-next-line
import ToDoItem, { todo } from "../components/ToDoItem";

export default function ToDoList() {
	const [todos, setTodo] = useState([] as any);
	const [title, setTitle] = useState("");

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			setTodo([{ id: todos.length, title }, ...todos]);
			console.log(todos);
		}
	};

	const handleDeleteToDo = (id: number) => {
		console.log(id);
		setTodo(todos.filter((todo: todo) => todo.id !== id));
	};

	return (
		<React.Fragment>
			<div className="bg-white mx-auto max-w-xl px-4 py-8">
				<input
					className="w-full rounded-full shadow-sm border border-reactblue"
					placeholder="Add ToDo here"
					value={title}
					onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				/>
				{todos.map((todo: todo, index: number) => (
					<ToDoItem {...todo} key={index} onDeleteToDo={handleDeleteToDo} />
				))}
			</div>
		</React.Fragment>
	);
}
