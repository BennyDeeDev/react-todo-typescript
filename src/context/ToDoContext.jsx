import React, { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const apiClient = axios.create({
	baseURL: `http://localhost:3000`,
	withCredentials: false, // This is the default
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export const useThunkReducer = (reducer, initialState) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const enhancedDispatch = React.useCallback(
		(action) => {
			console.log(action);

			if (typeof action === "function") {
				action(dispatch);
			} else {
				dispatch(action);
			}
		},
		[dispatch]
	);

	return [state, enhancedDispatch];
};

export const FETCH_TODOS = (dispatch) => {
	return apiClient.get("/todos").then((Response) =>
		dispatch({
			type: "TODO_FETCH",
			payload: [Response.data],
		})
	);
};

export const ToDoContext = createContext();

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_FETCH = "TODO_FETCH";

export const reducer = (todos, action) => {
	if (action.type === TODO_FETCH) {
		console.log(todos, action.payload);
		todos = action.payload;
	}

	if (action.type === TODO_ADD) {
		return [
			{
				id: uuidv4(),
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

	const fetchToDos = () => {
		dispatch({
			type: TODO_FETCH,
			payload: {
				todos,
			},
		});
	};

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
		<ToDoContext.Provider value={{ todos, fetchToDos, addToDo, deleteToDo, toggleToDo, changeToDo }}>
			{children}
		</ToDoContext.Provider>
	);
};
