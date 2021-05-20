import React from "react";
import Input from "../Input";
import List from "../List";
import "./TodoForm.scss";

function TodoForm() {
  return (
    <form className="todoForm">
      <Input />
      <List />
    </form>
  );
}

export default TodoForm;
