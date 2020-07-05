import React, { useContext } from "react";
import IToDo from "../models/IToDo";
import { ToDoContext } from "../context/ToDoContext";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

export default function ToDoItem(todo: IToDo) {
	const { deleteToDo, toggleToDo } = useContext(ToDoContext);

	const handleToggleToDo = (id: number) => {
		toggleToDo(id);
	};

	const handleDeleteToDo = (id: number) => {
		deleteToDo(id);
	};

	return (
		<div className="mt-4 flex items-center w-full rounded-full p-4 bg-white">
			<input type="checkbox" checked={todo.done} onChange={() => handleToggleToDo(todo.id)} />
			<Link to={`/todo/${todo.id}`}>
				<div className="ml-4">{todo.title}</div>
			</Link>
			<button className="ml-auto">
				<img className="w-4 pb-1 opacity-50" src={close} alt="" onClick={() => handleDeleteToDo(todo.id)} />
			</button>
		</div>
	);
}
