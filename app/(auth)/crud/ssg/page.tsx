import { cache } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const getTodos = cache(async (): Promise<TodoType[]> => {
    console.log("get todos ssg");
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos", { cache: "force-cache" });
    return todos.json();
});

export default async function Page() {
    const todos: TodoType[] = await getTodos();
    return (
        <div>
            <h1>SSG Page</h1>
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
                            <TableCell className="font-medium">{todo.id}</TableCell>
                            <TableCell>{todo.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
