export const addToDo = (title, done) => {
	return {
		type: "TODO_ADD",
		payload: {
			title: title,
			done: done,
		},
	};
};
