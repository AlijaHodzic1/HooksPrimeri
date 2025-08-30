import UseStateVezba1 from "./useStateVezba.jsx";
import UseStateVezba2 from "./useStateVezba2.jsx";
import UseEffectVezba from "./useEffectVezba.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				alignItems: "center",
				height: "100vh",
			}}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<h1>Welcome to the React Hooks</h1>
								<Link to="/useState">UseState primer</Link>
								<Link to="/useState2">UseState primer 2</Link>
								<Link to="/useEffect">UseEffect primer</Link>
							</>
						}
					/>
					<Route
						path="/useState"
						element={<UseStateVezba1 />}></Route>
					<Route
						path="/useState2"
						element={<UseStateVezba2 />}></Route>
					<Route
						path="/useEffect"
						element={<UseEffectVezba />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
