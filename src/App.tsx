import React from "react";
import NavBar from "./components/NavBar";
import ToDoList from "./pages/ToDoList";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<NavBar />

			<div className="mx-auto max-w-xl px-4 py-8">
				<Switch>
					<Route exact path="/">
						<ToDoList />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
