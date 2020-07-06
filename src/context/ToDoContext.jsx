import React, { useReducer, createContext } from "react";
import ToDoService from "../services/ToDoService";
import { reducer } from "../reducers/todo-reducer";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, []);

	const fetchToDos = () => {
		return ToDoService.fetchToDos()
			.then(({ data }) => {
				dispatch({
					type: "TODO_FETCH",
					payload: data,
				});
			})
			.catch((Error) => console.log(Error));
	};

	const addToDo = ({ title, done }) => {
		return ToDoService.addToDo({ title, done })
			.then(({ data }) => {
				dispatch({
					type: "TODO_ADD",
					payload: {
						id: data.id,
						title: data.title,
						done: data.done,
					},
				});
			})
			.catch((Error) => console.log(Error));
	};

	const deleteToDo = (id) => {
		return ToDoService.deleteToDo(id)
			.then(() => {
				dispatch({
					type: "TODO_DELETE",
					payload: {
						id,
					},
				});
			})
			.catch((Error) => console.log(Error));
	};

	const toggleToDo = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		return ToDoService.updateToDo(id, { done: !todo.done })
			.then(({ data }) => {
				dispatch({
					type: "TODO_TOGGLE",
					payload: {
						id: data.id,
						done: data.done,
					},
				});
			})
			.catch((Error) => console.log(Error));
	};

	const changeToDo = ({ id, title }) => {
		return ToDoService.updateToDo(id, { title })
			.then(({ data }) => {
				dispatch({
					type: "TODO_CHANGE",
					payload: {
						id: data.id,
						title: data.title,
					},
				});
			})
			.catch((Error) => console.log(Error));
	};

	return (
		<ToDoContext.Provider value={{ todos, fetchToDos, deleteToDo, addToDo, toggleToDo, changeToDo }}>
			{children}
		</ToDoContext.Provider>
	);
};
