"use server";

import prisma from "@/lib/prisma";

export async function createTodo(data: { title: string; content: string }) {
    try {
        const todo = await prisma.todos.create({
            data: {
                title: data.title,
                content: data.content
            }
        });
        return todo;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw new Error("タスクの作成に失敗しました");
    }
}

export async function updateTodo(id: number, data: { title?: string; content?: string }) {
    try {
        const updatedTodo = await prisma.todos.update({
            where: { id },
            data: {
                title: data.title,
                content: data.content,
                updatedAt: new Date()
            }
        });
        return updatedTodo;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw new Error("タスクの更新に失敗しました");
    }
}
