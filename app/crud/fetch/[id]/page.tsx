import TodoView from "./todoView";
import { getTodo } from "@/request/todo";
import NotFound from "@/app/not-found";

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const todo = await getTodo(id);
    if (todo) {
        return <TodoView todo={todo} />;
    } else {
        NotFound();
    }
}
