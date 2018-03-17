import React from "react";

const TodoInput = ({ value, onChange, onKeyPress, onClick }) => {
  return (
    <div>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>+</button>
    </div>
  );
};
export default TodoInput;
