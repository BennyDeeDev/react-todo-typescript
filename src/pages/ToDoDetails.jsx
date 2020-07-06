import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function ToDoDetails({ changeToDo }) {
	let { id } = useParams();
	const [title, setTitle] = useState("");
	const history = useHistory();

	//TODO: load title in input
	//Redux Store does not persist Data on relaoads ._.
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			changeToDo({ id, title });
			history.push("/");
		}
	};

	return (
		<div>
			<h1 className="text-xl mb-4">ToDo ID {id}</h1>
			<input
				className="w-full rounded-full shadow-sm border border-reactblue"
				placeholder="change ToDo here"
				value={title}
				onKeyDown={(e) => handleKeyDown(e)}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	);
}
