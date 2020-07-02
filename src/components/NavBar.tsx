import React from "react";
import logo from "../images/logo.svg";

export default function NavBar() {
	return (
		<div>
			<div className="bg-gray-300 flex justify-center items-center border-b-4 border-reactblue">
				<img src={logo} className="w-32" alt="logo" />
				<p className="text-2xl text-blue-900">React ToDo</p>
			</div>
		</div>
	);
}
