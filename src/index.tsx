import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./tailwind.generated.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProvider } from "./context/ToDoContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ToDoProvider>
				<App />
			</ToDoProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
