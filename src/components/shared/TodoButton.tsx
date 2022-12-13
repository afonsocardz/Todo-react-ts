import { Button } from "@chakra-ui/react";
import { useTodoContext } from "../../contexts/TodoContext";
import { TTodo } from "../../interfaces";
import { todoService } from "../../services/api/todos/todosService";

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

type ButtonProps = {
  Icon: React.ReactElement
  type: "submit" | "button"
  action?: "edit" | "delete"
  id?: number
  text?: string
}

export default function TodoButton({ Icon, type, action, id, text = "" }: ButtonProps) {
  const { setTodos } = useTodoContext();
  
  const clickHandler = async (e: ClickEvent) => {
    if (action === "delete") {
      await todoService.deleteTodo(Number(id));
      setTodos((prev): TTodo[] => 
        prev.filter((item: TTodo) => item.id !== id)
      );
    }
  }

  return (
    <>
      <Button leftIcon={Icon} type={type} onClick={clickHandler}>{text}</Button>
    </>
  )
}