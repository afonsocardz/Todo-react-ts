import { createContext, useContext, useState } from "react";
import { TCreateTodo, TTodo } from "../interfaces";

interface TodoProviderProps {
  children: React.ReactNode
}

interface TodoContextData {
  todos: [] | TTodo[],
  setTodos: React.Dispatch<React.SetStateAction<TTodo[] | []>>
}

const TodoContext = createContext({} as TodoContextData);

export const useTodoContext = () => useContext(TodoContext);

export default function TodoContextProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TTodo[] | []>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos}}>
      {children}
    </TodoContext.Provider>
  )
}