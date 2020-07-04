import React from "react";
import NavBar from "./components/NavBar";
import ToDoList from "./pages/ToDoList";

interface todo {
	title: string;
	date: Date;
}

function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<NavBar />
			<div className="mx-auto max-w-xl px-4 py-8">
				<ToDoList />
			</div>
		</div>
	);
}

export default App;
