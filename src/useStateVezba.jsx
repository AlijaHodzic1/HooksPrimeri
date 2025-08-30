import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function UseStateVezba() {
	const colors = ["white", "black", "blue"];
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState(0);

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme + 1) % colors.length);
	};

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1);
	};
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<div
			style={{
				backgroundColor: colors[theme],
				height: "100vh",
			}}>
			<button onClick={changeTheme}>Theme</button>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
			<button onClick={() => setCount(0)}>Reset</button>
			<br />
			<Link
				to="/"
				style={{ textAlign: "center", display: "block" }}>
				Go back to home
			</Link>
		</div>
	);
}

export default UseStateVezba;
