import React, { useContext } from "react";
import IToDo from "../models/IToDo";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

export default function ToDoItem({ todo, deleteToDo, toggleToDo }) {
	const handleToggleToDo = (id) => {
		toggleToDo(id);
	};

	const handleDeleteToDo = (id) => {
		deleteToDo(id);
	};

	return (
		<div className="mt-4 flex items-center w-full rounded-full p-4 bg-white">
			<input type="checkbox" checked={todo.done} onChange={() => handleToggleToDo(todo.id)} />
			<Link to={`/todo/${todo.id}`}>
				<div className="ml-4">{todo.title}</div>
			</Link>
			<button className="ml-auto">
				<img
					className="w-4 pb-1 opacity-50 hover:opacity-100 transition ease-in duration-100"
					src={close}
					alt=""
					onClick={() => handleDeleteToDo(todo.id)}
				/>
			</button>
		</div>
	);
}
