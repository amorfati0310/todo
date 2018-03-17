import React from "react";

const TodoItemList = ({ todos }) => {
  return <div>{todos.map(item => <div>{item}</div>)}</div>;
};
export default TodoItemList;
