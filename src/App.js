import React from "react";
import TodoForm from "./components/TodoForm";
// import Input from "./components/Input";
// import List from "./components/List";
import "./styles.scss";

function App() {
  return (
    <div className="main">
      <h1>TO DO</h1>
      <TodoForm />
      {/* <Input />
        <List />
      </TodoForm> */}
    </div>
  );
}

export default App;
