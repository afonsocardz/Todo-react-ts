import Todo from "../components/Todo/Todo";
import TodoContextProvider from "../contexts/TodoContext";

export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </>
  )
}