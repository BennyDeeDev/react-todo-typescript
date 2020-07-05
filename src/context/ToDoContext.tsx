import React, { useReducer, createContext } from "react";
import IToDo from "../models/IToDo";
import { v4 as uuidv4 } from "uuid";

interface IContextProps {
	todos: Array<IToDo>;
	todo: IToDo;
	addToDo?: Function;
	deleteToDo?: Function;
	toggleToDo?: Function;
	changeToDo?: Function;
}

const initialState: Array<IToDo> = [{ id: 1, title: "TypeScript lernen", done: false }];

export const ToDoContext = createContext<IContextProps>(initialState);

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";

const reducer = (todos: Array<IToDo> = [], action: any) => {
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

export const ToDoProvider = ({ children }: any) => {
	const [todos, dispatch] = useReducer(reducer, []);

	const addToDo = ({ title, done }: IToDo) => {
		dispatch({
			type: TODO_ADD,
			payload: {
				title,
				done,
			},
		});
	};

	const deleteToDo = (id: IToDo) => {
		dispatch({
			type: TODO_DELETE,
			payload: {
				id,
			},
		});
	};

	const toggleToDo = (id: IToDo) => {
		dispatch({
			type: TODO_TOGGLE,
			payload: {
				id,
			},
		});
	};

	const changeToDo = ({ id, title }: IToDo) => {
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
