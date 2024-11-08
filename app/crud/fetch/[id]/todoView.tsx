"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TodoType } from "@/types/todo";
import { todoEditSchema } from "@/shema/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { makePath, PATH_CRUD_FETCH_EDIT } from "@/lib/paths";
import { ScreenType } from "@/const/common";

export default function TodoView({ todo, screenType }: { todo: TodoType; screenType: number }) {
    const router = useRouter();
    const controlDisable: boolean = screenType === ScreenType.view;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(todoEditSchema),
        defaultValues: todo
    });

    return (
        <div>
            <h1 className="text-3xl font-bold">Todo {controlDisable ? "詳細" : "編集"}</h1>
            {controlDisable && (
                <div className="flex justify-end items-center my-4">
                    <Link href={makePath(PATH_CRUD_FETCH_EDIT, [todo.id])} className="border bg-blue-400 text-white rounded-lg p-2">
                        編集へ
                    </Link>
                </div>
            )}
            <form
                onSubmit={handleSubmit(async value => {
                    const res = await fetch("/api/todos", {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(value)
                    });
                    router.push("/crud/fetch");
                    router.refresh();
                })}
            >
                <div className="flex items-center flex-col mb-6">
                    <label htmlFor="title">タイトル</label>
                    <input id="title" {...register("title")} disabled={controlDisable} />
                </div>
                <div className="flex items-center flex-col">
                    <label htmlFor="content">コンテンツ</label>
                    <textarea id="content" {...register("content")} disabled={controlDisable} />
                </div>
                <button type="submit" disabled={controlDisable}>
                    更新
                </button>
            </form>
        </div>
    );
}
