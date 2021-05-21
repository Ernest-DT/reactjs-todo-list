import React, { useState } from "react";
import Input from "../Input";
import List from "../List";
import "./TodoForm.scss";

function TodoForm() {
  const [todos] = useState([
    { id: 1, name: "Test", complete: false },
    { id: 2, name: "Test2", complete: false },
  ]);
  return (
    <form className="todoForm">
      <Input />
      <List listTodos={todos} />
    </form>
  );
}

export default TodoForm;
