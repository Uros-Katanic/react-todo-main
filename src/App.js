import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/Form";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";

function App() {
  const isDone = false;
  const id = Math.random();
  const searchInput = useRef();
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Default todo",
      isDone: false,
    },
    {
      id: Math.random(),
      text: "Default todo2",
      isDone: false,
    },
    {
      id: Math.random(),
      text: "Default todo3",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id, text, isDone }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  let hasRendered = useRef(false);
  useEffect(() => {
    hasRendered.current = true;
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1
          className="text-center mb-4"
        >
          Todo List
        </h1>
        <div
        >
          <TodoForm addTodo={addTodo} />
          <div>

            {todos.map((todo, index) => (
              <div
              >
                <Card>
                  <div >
                    <Card.Body>
                      <TodoList
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                      />
                    </Card.Body>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
