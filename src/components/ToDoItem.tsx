import React from "react";
import close from "../images/close.svg";

export interface todo {
	title: string;
	id: number;
	done: boolean;
	onDeleteToDo: Function;
	onToggleToDo: Function;
}

export default function ToDoItem({ title, id, done, onDeleteToDo, onToggleToDo }: todo) {
	return (
		<div className="mt-4 flex items-center w-full rounded-full p-4 bg-white">
			<input type="checkbox" checked={done} onChange={() => onToggleToDo(id)} />
			<div className="ml-4">{title}</div>
			<button className="ml-auto" onClick={() => onDeleteToDo(id)}>
				<img className="w-4 pb-1 opacity-50" src={close} alt="" />
			</button>
		</div>
	);
}
