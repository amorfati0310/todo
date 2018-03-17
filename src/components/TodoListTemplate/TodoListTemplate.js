import React from "react";

const TodoListTemplate = ({ form, children }) => {
  return (
    <main>
      <h2>오늘 할 일은?</h2>
      <section>{form}</section>
      <section>{children}</section>
    </main>
  );
};
export default TodoListTemplate;
