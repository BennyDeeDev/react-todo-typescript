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

const PATH = "/todos";

export default {
	fetchToDos() {
		return apiClient.get(PATH);
	},
	addToDo(todo) {
		return apiClient.post(PATH, { title: todo.title, done: todo.done });
	},
	deleteToDo(id) {
		return apiClient.delete(`${PATH}/${id}`);
	},
	updateToDo(id, payload) {
		return apiClient.patch(`${PATH}/${id}`, payload);
	},
};

//Alle done ToDos am Ende des Tages in eine andere Tabelle schmeißen --> Backend Task
