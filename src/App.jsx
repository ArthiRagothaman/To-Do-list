import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function TodoApp() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setTodos([...todos, input]);
		setInput("");
	};

	const handleDelete = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="todo-app">
			<form onSubmit={handleSubmit}>
				<input
					className="todo-input"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="add-todo-btn" type="submit">
					Add Todo
				</button>
			</form>
			<ul className="todo-list">
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}
						<button
							className="delete-todo-btn"
							onClick={() => handleDelete(index)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoApp;
