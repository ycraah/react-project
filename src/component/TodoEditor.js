import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  return (
    <div className="TodoEditor">
      <h4>Todo 작성하기</h4>
      <div className="editor_wrapper">
        <input placeholder="새로운 Todo를 입력하세요" />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
