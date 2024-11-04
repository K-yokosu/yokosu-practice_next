"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TodoType } from "@/types/todo";
import { todoEditSchema } from "@/shema/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TodoView({todo}: {todo: TodoType}){
    const router = useRouter();
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(todoEditSchema),
      defaultValues: todo
    });

    return (
        <div>
            view
            <button 
                onClick={() => setIsEdit((prev) => !prev)}
                className="border bg-blue-400 text-white rounded-lg p-2"
            >
                {isEdit ? "詳細へ切替" : "編集へ切替"}
            </button>

            {!isEdit
            ?
                <div>
                    <div>title: {todo.title}</div>
                    <div>content: {todo.content}</div>
                </div>
            :
                <div>
                    <h1>Todo編集フォーム</h1>
                    <form onSubmit={handleSubmit(async (value) => {
                        console.log(value)
                        const res = await fetch("/api/todos", {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(value),
                        });
                        router.push("/todo");
                        router.refresh();
                    })}>
                    <div>
                        <label htmlFor="title">タイトル</label>
                        <input id="title" {...register("title")} />
                        {/* {errors.title && <p>{errors.title.message}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="content">詳細</label>
                        <textarea id="content" {...register("content")} />
                        {/* {errors.content && <p>{errors.content.message}</p>} */}
                    </div>
                    <button type="submit">更新</button>
                    </form>
                </div>
            }
            
        </div>
    )
}