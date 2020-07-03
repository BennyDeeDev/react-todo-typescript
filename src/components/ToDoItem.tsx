import React from "react";
import close from "../images/close.svg";

export interface todo {
	title: string;
	id: number;
	onDeleteToDo: Function;
}

export default function ToDoItem({ title, id, onDeleteToDo }: todo) {
	return (
		<div className="mt-4 flex items-center w-full">
			<input type="checkbox" name="" id="" />
			<div className="ml-4">{title}</div>
			<button className="ml-auto" onClick={() => onDeleteToDo(id)}>
				<img className="w-4 pb-1 opacity-50" src={close} alt="" />
			</button>
		</div>
	);
}
