const TodoInput = ({ text, handleInputText }) => {
  return (
    <input
      placeholder="할 일을 추가하세요."
      value={text}
      onChange={handleInputText}
    />
  );
};

export default TodoInput;
