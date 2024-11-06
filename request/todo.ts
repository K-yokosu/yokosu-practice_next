import prisma from "@/lib/prisma";

import { TodoType } from "@/types/todo";

export const getTodos = async (): Promise<TodoType[]> => {
    const todos = await prisma.todos.findMany();
    return todos;
};

export const getTodo = async (id: number): Promise<TodoType | null> => {
    const todo = await prisma.todos.findUnique({ where: { id } });
    return todo;
};
