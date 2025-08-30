import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UseEffectVezba() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	const resizeListener = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener("resize", resizeListener);

		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return (
		<>
			<div>Window width:{windowWidth}</div>
			<div>Window height:{windowHeight}</div>
			<h2>Try resizing the window and see the numbers change.</h2>
			<Link to="/">Back to home</Link>
		</>
	);
}

export default UseEffectVezba;
