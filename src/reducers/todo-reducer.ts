//action.type always STRING !!!

export const reducer = (todos = [], action) => {
	if (action.type === "TODO_FETCH") {
		todos = action.payload;
	}

	if (action.type === "TODO_ADD") {
		if (action.payload.id) {
			return [
				{
					...action.payload,
				},

				...todos,
			];
		} else {
			return [
				{
					id: Date.now(),
					...action.payload,
				},

				...todos,
			];
		}
	}

	if (action.type === "TODO_DELETE") {
		return todos.filter((todo) => todo.id !== action.payload.id);
	}

	//? Refactor? Dont want to mess up with the order!
	if (action.type === "TODO_TOGGLE") {
		return todos.map((todo) => {
			if (todo.id === action.payload.id) {
				return { ...todo, done: !todo.done };
			}
			return todo;
		});
	}

	if (action.type === "TODO_CHANGE") {
		return todos.map((todo) => {
			if (todo.id === action.payload.id) {
				return { ...todo, title: action.payload.title };
			}
			return todo;
		});
	}

	return todos;
};
