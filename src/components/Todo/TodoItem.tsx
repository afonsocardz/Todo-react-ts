import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TTodo } from "../../interfaces";
import { todoService } from "../../services/api/todos/todosService";
import TodoButton from "../shared/TodoButton";

interface TodoProps {
  todo: TTodo
}

type CheckBoxEvent = React.ChangeEvent<HTMLInputElement>;

export default function TodoItem({ todo }: TodoProps) {
  const [isDone, setIsDone] = useState(todo.isDone);
  
  const checkBoxHandler = async (e: CheckBoxEvent) => {
    await todoService.updateTodoById({...todo, isDone: !isDone});
    setIsDone(!isDone) ;
  }

  return (
    <>
      <Flex justifyContent={"space-between"} width="300px" alignItems={"center"}>
        <Checkbox isChecked={isDone} onChange={checkBoxHandler} />
        <Text as={isDone ? "del" : ""}>{todo.text}</Text>
        <TodoButton id={todo.id} Icon={<DeleteIcon />} type="button" action="delete" text="Apagar" />
      </Flex>
    </>
  )
}