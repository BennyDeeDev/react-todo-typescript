import ToDoService from "../services/ToDoService";
import { get } from "http";

const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_FETCH = "TODO_FETCH";

//TODO: Error Handling
export const fetchToDos = () => {
	return (dispatch) => {
		ToDoService.fetchToDos()
			.then(({ data }) => {
				dispatch({
					type: TODO_FETCH,
					payload: data,
				});
			})
			.catch((Error) => console.log(Error));
	};
};

export const addToDo = ({ title, done }) => {
	return (dispatch) => {
		ToDoService.addToDo({ title, done })
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
};

export const deleteToDo = (id) => {
	return (dispatch) => {
		ToDoService.deleteToDo(id)
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
};

export const toggleToDo = (id) => {
	return (dispatch, getState) => {
		const todo = getState().find((todo) => todo.id === id);
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
};

export const changeToDo = ({ id, title }) => {
	return (dispatch) => {
		ToDoService.updateToDo(id, { title })
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
};
