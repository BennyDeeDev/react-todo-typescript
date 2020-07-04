import React from "react";
import todo from "../models/todo";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

interface props {
	todo: todo;
	onDeleteToDo: Function;
	onToggleToDo: Function;
}

export default function ToDoItem({ todo, onDeleteToDo, onToggleToDo }: props) {
	return (
		<div className="mt-4 flex items-center w-full rounded-full p-4 bg-white">
			<input type="checkbox" checked={todo.done} onChange={() => onToggleToDo(todo.id)} />
			<Link to={`/todo/${todo.id}`}>
				<div className="ml-4">{todo.title}</div>
			</Link>
			<button className="ml-auto" onClick={() => onDeleteToDo(todo.id)}>
				<img className="w-4 pb-1 opacity-50" src={close} alt="" />
			</button>
		</div>
	);
}
