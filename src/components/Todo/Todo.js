import React from "react";

import "./Todo.scss";

function Todo({ compTodo }) {
  return (
    <div>
      {compTodo.name}
      {/* <p contentEditable="true">This is an editable paragraph.</p> */}
    </div>
  );
}

export default Todo;
