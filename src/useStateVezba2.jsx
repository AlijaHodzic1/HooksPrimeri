import { useState } from "react";

function UseStateVezba2() {
	const [todos, setTodos] = useState([]);
	const [newTask, setNewTask] = useState("");

	const addTask = () => {
		if (newTask.trim() === "") return;
		setTodos([...todos, { text: newTask, completed: false }]);
		setNewTask("");
	};

	return (
		<div>
			<input
				type="text"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="input placeholder..."
			/>
			<button onClick={addTask}>Submit</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default UseStateVezba2;
