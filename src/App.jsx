import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ToDoListContainer from "./containers/ToDoListContainer";
import ToDoDetailsContainer from "./containers/ToDoDetailsContainer";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<NavBar />

			<div className="mx-auto max-w-xl px-4 py-8">
				<Switch>
					<Route exact path="/">
						<ToDoListContainer />
					</Route>
					<Route exact path="/todo/:id">
						<ToDoDetailsContainer />
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
