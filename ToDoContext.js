import { createContext, useState, useContext } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();
const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDoContext must be used within a ToDoProvider");
  }
  return context;
};

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
      value={{ todos, inputText, setInputText, handleSubmit, setTodos }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { useToDoContext, ToDoProvider };
