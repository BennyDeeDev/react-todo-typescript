const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_FETCH = "TODO_FETCH";

export const fetchToDos = () => {
	return {
		type: TODO_FETCH,
		payload: [],
	};
};

export const addToDo = ({ title, done }) => {
	return {
		type: TODO_ADD,
		payload: {
			title,
			done,
		},
	};
};

export const deleteToDo = (id) => {
	return {
		type: TODO_DELETE,
		payload: {
			id,
		},
	};
};

export const toggleToDo = (id) => {
	return {
		type: TODO_TOGGLE,
		payload: {
			id,
		},
	};
};

export const changeToDo = ({ id, title }) => {
	return {
		type: TODO_CHANGE,
		payload: {
			id,
			title,
		},
	};
};
