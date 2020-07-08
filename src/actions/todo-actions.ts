import ToDoService from "../services/ToDoService";
import { Dispatch } from "redux";
import IToDo from "../models/IToDo";

//TODO: Error Handling
export const fetchToDos = () => {
	return async (dispatch: Dispatch) => {
		return ToDoService.fetchToDos()
			.then(({ data }) => {
				dispatch({
					type: "TODO_FETCH",
					payload: data,
				});
			})
			.catch((Error) => console.log(Error));
	};
};

export const addToDo = ({ title, done }: IToDo) => {
	return async (dispatch: Dispatch) => {
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
};

export const deleteToDo = (id: number) => {
	return async (dispatch: Dispatch) => {
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
};

export const toggleToDo = (id: number) => {
	return async (dispatch: Dispatch, getState: any) => {
		const todo = getState().find((todo: IToDo) => todo.id === id);
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
};

export const changeToDo = ({ id, title }: IToDo) => {
	return async (dispatch: Dispatch) => {
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
};
