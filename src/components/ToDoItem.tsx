import React from "react";
import todo from "../models/todo";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

interface props {
	todo: todo;
}

export default function ToDoItem({ todo }: props) {
	return (
		<div className="mt-4 flex items-center w-full rounded-full p-4 bg-white">
			<input type="checkbox" checked={todo.done} />
			<Link to={`/todo/${todo.id}`}>
				<div className="ml-4">{todo.title}</div>
			</Link>
			<button className="ml-auto">
				<img className="w-4 pb-1 opacity-50" src={close} alt="" />
			</button>
		</div>
	);
}
