"use client";

import { TodoType } from "@/types/todo";
import { NavigateBtn } from "@/components/NavigateBtn";
import { useRouter } from "next/navigation";
import { makePath, PATH_CRUD_FETCH_DETAIL } from "@/lib/paths";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
// import { SampleContainer } from "@/components/modal/container";
import Link from "next/link";

export default function TodoList({ todos }: { todos: TodoType[] }) {
    const router = useRouter();

    return (
        <>
            <h1 className="text-3xl font-bold">Todo Top</h1>
            <div className="flex justify-end items-center my-4">
                <NavigateBtn url="/crud/fetch/create" />
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>title</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {todos.map(todo => (
                        <TableRow key={todo.id}>
                            <TableCell className="font-medium">
                                <Link className="hover:underline" href={makePath(PATH_CRUD_FETCH_DETAIL, [todo.id])}>
                                    {todo.id}
                                </Link>
                            </TableCell>
                            <TableCell>{todo.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <table>
                <thead>
                    <tr>
                        <th>タイトル</th>
                        <th>詳細</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.length > 0 &&
                        todos.map(todo => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.content}</td>
                                    <td>
                                        <button onClick={() => router.push(makePath(PATH_CRUD_FETCH_DETAIL, [todo.id]))}>詳細</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={async () => {
                                                const res = await fetch("/api/todos", {
                                                    method: "DELETE",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ id: todo.id })
                                                });
                                                console.log(res);
                                                //   router.push("/todo");
                                                //   router.refresh();
                                            }}
                                        >
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table> */}
        </>
    );
}
