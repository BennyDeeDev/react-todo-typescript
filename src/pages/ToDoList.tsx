import React, { useState, useContext } from "react";
import ToDoItem from "../components/ToDoItem";
import IToDo from "../models/IToDo";
import { ToDoContext } from "../context/ToDoContext";

export default function ToDoList() {
	const { todos, addToDo } = useContext(ToDoContext);
	const [title, setTitle] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			addToDo({ title, done: false });
		}
	};

	const activeToDos: Function = () => {
		return todos.filter((todo: IToDo) => !todo.done);
	};

	const doneToDos: Function = () => {
		return todos.filter((todo: IToDo) => todo.done);
	};

	//TODO: create Custom Hook for Input on KeyDown
	return (
		<React.Fragment>
			<div className="">
				<input
					className="w-full rounded-full shadow-sm border border-reactblue"
					placeholder="Add ToDo here"
					value={title}
					onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				/>
				<h2 className="text-3xl font-weight-200 mt-4">Active ToDos</h2>
				{activeToDos().map((todo: IToDo) => (
					<ToDoItem {...todo} key={todo.id} />
				))}
			</div>
			<div className="mt-4">
				<h2 className="text-3xl font-weight-200">Done ToDos</h2>
				{doneToDos().map((todo: IToDo) => (
					<ToDoItem {...todo} key={todo.id} />
				))}
			</div>
		</React.Fragment>
	);
}
