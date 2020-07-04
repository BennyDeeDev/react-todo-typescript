import React, { useState } from "react";
// eslint-disable-next-line
import ToDoItem from "../components/ToDoItem";
import todo from "../models/todo";

export default function ToDoList() {
	const [todos, setTodo] = useState([] as Array<todo>);
	const [title, setTitle] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			setTodo([{ id: todos.length, title, done: false }, ...todos]);
			console.log(todos);
		}
	};

	const handleDeleteToDo = (id: number) => {
		setTodo(todos.filter((todo: todo) => todo.id !== id));
	};

	const handleToggleToDo = (id: number) => {
		console.log(id, "toggle");
		let copyOfTodos = [...todos];
		let indexOfToDo = copyOfTodos.findIndex((todo) => todo.id === id);
		copyOfTodos[indexOfToDo] = {
			...copyOfTodos[indexOfToDo],
			done: !copyOfTodos[indexOfToDo].done,
		};

		setTodo(copyOfTodos);
	};

	const activeToDos: Function = () => {
		return todos.filter((todo: todo) => !todo.done);
	};

	const doneToDos: Function = () => {
		return todos.filter((todo: todo) => todo.done);
	};

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
				{activeToDos().map((todo: todo, index: number) => (
					<ToDoItem todo={todo} key={index} onDeleteToDo={handleDeleteToDo} onToggleToDo={handleToggleToDo} />
				))}
			</div>
			<div className="mt-4">
				<h2 className="text-3xl font-weight-200">Done ToDos</h2>
				{doneToDos().map((todo: todo, index: number) => (
					<ToDoItem todo={todo} key={index} onDeleteToDo={handleDeleteToDo} onToggleToDo={handleToggleToDo} />
				))}
			</div>
		</React.Fragment>
	);
}
