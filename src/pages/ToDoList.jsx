import React, { useState, useEffect } from "react";
import IToDo from "../models/IToDo";
import ToDoItemContainer from "../containers/ToDoItemContainer";

export default function ToDoList({ addToDo, todos, fetchToDos }) {
	const [title, setTitle] = useState("");

	useEffect(() => {
		fetchToDos();
	}, []);

	//TODO: create Custom Hook for Input on KeyDown
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			addToDo({ title, done: false });
		}
	};

	const activeToDos = () => {
		return todos.filter((todo) => !todo.done);
	};

	const doneToDos = () => {
		return todos.filter((todo) => todo.done);
	};

	return (
		<React.Fragment>
			<div className="">
				<input
					className="w-full rounded-full shadow-sm border border-reactblue"
					placeholder="Add ToDo here"
					value={title}
					onKeyDown={(e) => handleKeyDown(e)}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<h2 className="text-3xl font-weight-200 mt-4">Active ToDos</h2>
				{activeToDos().map((todo, index) => (
					<ToDoItemContainer todo={todo} key={index} />
				))}
			</div>
			<div className="mt-4">
				<h2 className="text-3xl font-weight-200">Done ToDos</h2>
				{doneToDos().map((todo, index) => (
					<ToDoItemContainer todo={todo} key={index} />
				))}
			</div>
		</React.Fragment>
	);
}
