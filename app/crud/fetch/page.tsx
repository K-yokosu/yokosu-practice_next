import TodoList from "./todoList";
import { getTodos } from "@/fetch_function/todo";
import { TodoType } from "@/types/todo";
import { headers } from 'next/headers'


export default async function Page() {
    // const headersData = headers();
    // const host = headersData.get('host');
    // const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https';
    // const apiBase = `${protocol}://${host}`;
    // console.log(host);
    // console.log(protocol);
    const todos: TodoType[] = await getTodos();
    // const res = await fetch(
    //     `${apiBase}/api/todos`,
    //     {
    //         method: 'GET', 
    //         // cache: "no-store",
    //         next: {revalidate: 30},
    //     }
    // );
    // const data = await res.json();
    // console.log(data)
    // return data.todo;
    return (
        <TodoList todos={todos} />
        // <div>abc</div>
    );
}
