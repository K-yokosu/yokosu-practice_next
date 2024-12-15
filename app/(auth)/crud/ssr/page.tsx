import { cache } from "react";
import TodoList from "../fetch/todoList";
import { TodoType } from "@/types/todo";
import prisma from "@/lib/prisma";
// import { getTodos } from "@/request/todo";

export const getTodos = cache(async (): Promise<TodoType[]> => {
    const todos = await prisma.todos.findMany();
    return todos;
});

export default async function Page() {
    const todos: TodoType[] = await getTodos();
    return <TodoList todos={todos} />;
}
