"use client";

import { useRouter } from "next/navigation";
import { todoCreateSchema } from "@/shema/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TodoCreateForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(todoCreateSchema)
    });

    return (
        <>
            <h2>Todo Create 画面</h2>
            <div>
                <h1>Todo作成フォーム</h1>
                <form
                    onSubmit={handleSubmit(async value => {
                        const res = await fetch("/api/todos", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(value)
                        });
                        router.push("/crud/fetch");
                        router.refresh();
                        // reset();
                        // mutate();
                    })}
                >
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
                    <button type="submit">作成</button>
                </form>
            </div>
        </>
    );
}
