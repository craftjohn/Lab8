import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const todoInputRef = useRef();

    const handleAddTodo = () => {
        const newTodo = todoInputRef.current.value.trim();
        if (newTodo !== '') {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            todoInputRef.current.value = '';
        }
    };

    const handleRemoveTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <div className="todo-container">
                <h1>To Do List</h1>
                <div className="input-container">
                    <input type="text" ref={todoInputRef} placeholder="Enter your todo" />
                    <button onClick={handleAddTodo}>Add</button>
                </div>
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <li key={index} onClick={() => handleRemoveTodo(index)}>
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;