"use client"

import { TodoType } from "@/types/todo";
import { NavigateBtn } from "@/components/NavigateBtn";
import { useRouter } from "next/navigation";
import { makePath, PATH_CRUD_FETCH_DETAIL } from "@/lib/paths";
// import { SampleContainer } from "@/components/modal/container";
import Link from "next/link";
// import Image from "next/image";
// import dummy from "@/public/dummy1.png"

export default function TodoList({todos}: {todos: TodoType[]}){
    const router = useRouter();
    console.log(makePath(PATH_CRUD_FETCH_DETAIL, [1]));
    return (
        <>
            <h2>Todo Top 画面</h2>
            {/* <Image
                src={dummy}
                alt="aaa"
                width={100}
                height={100}
            /> */}
            <NavigateBtn url="/crud/fetch/create" />

            <table>
                <thead>
                    <tr>
                    <th>タイトル</th>
                    <th>詳細</th></tr>
                </thead>
                <tbody>
                    {todos.length > 0 && todos.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                                <td>
                                    <button onClick={() => router.push(makePath(PATH_CRUD_FETCH_DETAIL, [todo.id]))}>詳細</button>
                                </td>
                                <td>
                                    <button onClick={async() => {
                                        const res = await fetch("/api/todos", {
                                            method: "DELETE",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({id: todo.id}),
                                          });
                                          console.log(res)
                                        //   router.push("/todo");
                                        //   router.refresh();
                                    }}>削除</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}