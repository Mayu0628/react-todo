import { useState } from "react";

const Form = ({createTodo}) => {
  const [enteredTodo,setenteredTodo] = useState("");
  const addTodo = (e) => {

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createTodo(newTodo);
  };

  return (
    <>
    <div>
      <input type="text" value={enteredTodo} onChange={(e) => setenteredTodo(e.target.value)}></input>
      <button onClick={addTodo}>追加</button>
    </div>
    </>
  )
}

export default Form;
