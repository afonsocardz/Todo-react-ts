import { AddIcon } from "@chakra-ui/icons";
import {
  Input,
}
  from "@chakra-ui/react"
import { useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";
import { TCreateTodo, TTodo } from "../../interfaces";
import { todoService } from "../../services/api/todos/todosService";
import TodoButton from "./TodoButton"

type SubmitEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function TodoInput() {
  const { setTodos } = useTodoContext();
  const [input, setInput] = useState<string>("");

  const submitHandler = async (e: SubmitEvent) => {
    e.preventDefault();
    const todo: TCreateTodo = {
      text: input,
      isDone: false,
    };
    const result = await todoService.postTodo(todo);
    setTodos((prev): TTodo[] => [...prev, result]);
  }

  const inputHandler = (e: ChangeEvent) => {
    setInput(e.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <Input onChange={inputHandler} />
          <TodoButton Icon={<AddIcon />} text="Adicionar" type="submit"/>
        </form>
      </div>

    </>
  )
}