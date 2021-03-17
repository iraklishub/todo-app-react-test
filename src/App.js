import React, {useState, useEffect} from "react"; 
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);
	useEffect(() => {
		const filterHandler = () => {
			switch(status) {
				case 'completed':
					setFilteredTodos(todos.filter(todo => todo.completed === true));
					break;
				case 'uncompleted':
					setFilteredTodos(todos.filter(todo => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		}
		filterHandler();
	}, [todos, status]);
	return (
		<div className="app">
			<header>
			   	<h1>Todo List test</h1>
		 	</header>
		 	<Form 
		 		inputText={inputText} 
		 		todos={todos} 
		 		setTodos={setTodos} 
		 		setInputText={setInputText} 
		 		setStatus={setStatus}
		 	/>
		 	<TodoList 
		 		filteredTodos={filteredTodos} 
		 		setTodos={setTodos} 
		 		todos={todos} />
		</div>
	);
}
// https://www.youtube.com/watch?v=pCA4qpQDZD8
export default App;