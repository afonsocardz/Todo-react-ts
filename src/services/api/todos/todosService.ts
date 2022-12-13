import { api } from "../api";
import { TTodo } from "../../../interfaces";


async function getTodos(): Promise<TTodo[]> {
  const { data } = await api.get<TTodo[]>("/todos");
  return data;
}

async function postTodo(todo: Omit<TTodo, "id">) {
  const { data } = await api.post<TTodo>("/todos", todo);
  return data;
}

async function deleteTodo(todoId: number){
  await api.delete(`/todos/${todoId}`);
}

async function updateTodoById(todo: TTodo){
  await api.put(`/todos/${todo.id}`, todo);
}

export const todoService = {
  getTodos,
  postTodo,
  deleteTodo,
  updateTodoById,
}

