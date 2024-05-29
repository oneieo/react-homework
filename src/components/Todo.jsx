const Todo = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li
      key={todo.id}
      style={todo.isDone ? { textDecoration: "line-through" } : null}
    >
      {todo.content}
      <button onClick={() => handleToggleTodo(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default Todo;
