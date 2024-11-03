import TodoList from "./todoList";
import { getTodos } from "@/fetch_function/todo";
import { TodoType } from "@/types/todo";

export default async function Page() {
    const todos: TodoType[] = await getTodos();
    return (
        <>
            <TodoList todos={todos} />
            {/* <div>abc</div> */}
        </>
    );
}
