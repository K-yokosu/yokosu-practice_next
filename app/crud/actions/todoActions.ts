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
