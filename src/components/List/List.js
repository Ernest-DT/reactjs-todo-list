import React from "react";
import Todo from "../Todo";
import "./List.scss";

function List({ listTodos }) {
  return (
    // <div>
    //   <input type="checkbox" />
    //   <input type="text" />
    //   {listTodos.length}
    // </div>
    listTodos.map((todo) => {
      return <Todo key={todo.id} compTodo={todo} />;
    })
  );
}

export default List;
