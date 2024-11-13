"use client";

import { TodoType } from "@/types/todo";
import { NavigateBtn } from "@/components/NavigateBtn";
import { useRouter } from "next/navigation";
import { makePath, PATH_CRUD_FETCH_DETAIL } from "@/lib/paths";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
// import { SampleContainer } from "@/components/modal/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import redTrash from "@/public/images/trash_red.svg";
import Link from "next/link";
import { deleteTodo } from "@/app/crud/actions/todoActions";
import useLoadingStore from "@/stores/useLoadingStore";

export default function TodoList({ todos }: { todos: TodoType[] }) {
    const router = useRouter();
    const { setLoading } = useLoadingStore();

    const handleDelete = async (id: number) => {
        setLoading(true);
        try {
            await deleteTodo(id);
            router.push("/crud/fetch");
            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

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
                        <TableHead>削除</TableHead>
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
                            <TableCell>
                                <Button onClick={() => handleDelete(todo.id)} variant={"ghost"} type="button">
                                    <Image src={redTrash} width={18} height={22} alt="redTrash" className="cursor-pointer" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
