import { Box } from "@chakra-ui/react";
import { useEffect } from "react"
import { useTodoContext } from "../../contexts/TodoContext";
import { todoService } from "../../services/api/todos/todosService";
import TodoHeader from "./TodoHeader";

import TodoItem from "./TodoItem";

export default function Todo() {
  const { todos, setTodos } = useTodoContext();

  useEffect(() => {
    todoService.getTodos().then((todos) => setTodos(todos));
  }, []);

  console.log(todos)

  return (
    <>
      <Box>
        <TodoHeader />
        {todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
      </Box>

    </>
  )
}