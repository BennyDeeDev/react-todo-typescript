import React from "react";
import NavBar from "./components/NavBar";
import ToDoList from "./pages/ToDoList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<NavBar />

			<Switch>
				<div className="mx-auto max-w-xl px-4 py-8">
					<Route exact path="/">
						<ToDoList />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</div>
			</Switch>
		</div>
	);
}

export default App;
