import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";

function App() {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      content: "잠 자기",
      isDone,
    },
    { id: uuidv4(), content: "밥 먹기", isDone },
    { id: uuidv4(), content: "드러눕기", isDone: true },
  ]);

  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      content: text,
      isDone,
    };

    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    const filteredTodos = todos.map((todo) => {
      return id === todo.id ? { ...todo, isDone: !todo.isDone } : todo;
    });

    setTodos(filteredTodos);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  };

  return (
    <>
      <h1>할 일 목록</h1>
      <div>
        <TodoInput text={text} handleInputText={handleInputText} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <ul>
        {/* 할 일 목록 들어오는 곳 */}
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggleTodo={handleToggleTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
