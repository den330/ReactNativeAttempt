import { createContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  function handleSubmit() {
    if (inputText.trim() !== "") {
      const newTodo = { id: uuidv4(), text: inputText };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText("");
    }
  }
  return (
    <ToDoContext.Provider
      value={{ todos, inputText, setInputText, handleSubmit }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
