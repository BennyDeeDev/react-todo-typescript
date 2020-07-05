import React, { useReducer, createContext, useCallback } from "react";
import id from "uuid/v4";

export const ToDoContext = createContext();

const TODO_ADD = "TODO_ADD";

const reducer = (state = [], action) => {
	if (action.type === TODO_ADD) {
		return [
			{
				id: id(),
				...action.payload,
			},
			...state,
		];
	}
	return state;
};

export const ToDoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, []);

	const addToDo = useCallback(
		({ id, title, done }) => {
			dispatch({
				type: TODO_ADD,
				payload: {
					id,
					title,
					done,
				},
			});
		},
		[dispatch]
	);

	return <ToDoContext.Provider value={{ todos, addToDo }}>{children}</ToDoContext.Provider>;
};
