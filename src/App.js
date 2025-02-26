import "./App.css";
import { useState, useRef } from "react";
import Header from "./component/Header.js";
import TodoEditor from "./component/TodoEditor.js";
import TodoList from "./component/TodoList.js";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "테스트 데이터1",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "테스트 데이터2",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "테스트 데이터3",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
