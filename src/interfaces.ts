export type TTodo = {
  id: number,
  text: string,
  isDone: boolean
}

export type TCreateTodo = Omit<TTodo, "id">