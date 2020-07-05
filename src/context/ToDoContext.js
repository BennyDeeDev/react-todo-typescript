import React, { useReducer, createContext } from "react";
import id from "uuid/v4";

export const ToDoContext = createContext();

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";

const reducer = (todos = [], action) => {
	if (action.type === TODO_ADD) {
		return [
			{
				id: id(),
				...action.payload,
			},
			...todos,
		];
	}

	if (action.type === TODO_DELETE) {
		return todos.filter((todo) => todo.id !== action.payload.id);
	}

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

	const addToDo = ({ title, done }) => {
		dispatch({
			type: TODO_ADD,
			payload: {
				title,
				done,
			},
		});
	};

	const deleteToDo = (id) => {
		dispatch({
			type: TODO_DELETE,
			payload: {
				id,
			},
		});
	};

	const toggleToDo = (id) => {
		dispatch({
			type: TODO_TOGGLE,
			payload: {
				id,
			},
		});
	};

	const changeToDo = ({ id, title }) => {
		dispatch({
			type: TODO_CHANGE,
			payload: {
				id,
				title,
			},
		});
	};

	return (
		<ToDoContext.Provider value={{ todos, addToDo, deleteToDo, toggleToDo, changeToDo }}>
			{children}
		</ToDoContext.Provider>
	);
};
