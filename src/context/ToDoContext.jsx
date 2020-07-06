import React, { useReducer, createContext } from "react";
import ToDoService from "../services/ToDoService";

export const ToDoContext = createContext();

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_FETCH = "TODO_FETCH";

export const reducer = (todos = [], action) => {
	if (action.type === TODO_FETCH) {
		todos = action.payload;
	}

	if (action.type === TODO_ADD) {
		console.log(action.payload);
		console.log(todos);
		return [
			{
				...action.payload,
			},

			...todos,
		];
	}

	if (action.type === TODO_DELETE) {
		return todos.filter((todo) => todo.id !== action.payload.id);
	}

	//? Refactor? Dont want to mess up with the order!
	if (action.type === TODO_TOGGLE) {
		return todos.map((todo) => {
			if (todo.id === action.payload.id) {
				return { ...todo, done: !todo.done };
			}
			return todo;
		});
	}

	if (action.type === TODO_CHANGE) {
		return todos.map((todo) => {
			if (todo.id === action.payload.id) {
				return { ...todo, title: action.payload.title };
			}
			return todo;
		});
	}

	return todos;
};

export const ToDoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, []);

	const fetchToDos = () => {
		return ToDoService.fetchToDos()
			.then(({ data }) => {
				dispatch({
					type: TODO_FETCH,
					payload: data,
				});
			})
			.catch((Error) => console.log(Error));
	};

	const addToDo = ({ title, done }) => {
		return ToDoService.addToDo({ title, done })
			.then(({ data }) => {
				dispatch({
					type: TODO_ADD,
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
					type: TODO_DELETE,
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
					type: TODO_TOGGLE,
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
					type: TODO_CHANGE,
					payload: {
						id: data.id,
						title: data.title,
					},
				});
			})
			.catch((Error) => console.log(Error));
	};

	return (
		<ToDoContext.Provider value={{ todos, fetchToDos, deleteToDo, toggleToDo, changeToDo }}>
			{children}
		</ToDoContext.Provider>
	);
};
