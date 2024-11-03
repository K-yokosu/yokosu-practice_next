import TodoView from "./todoView";
import { getTodo } from "@/fetch_function/todo";

export default async function Page({ params }: {params: {id: string}}) {
    const id = Number(params.id);
    const todo = await getTodo(id);
    
    return (
        <>
            <TodoView todo={todo} />
        </>
    );
}
