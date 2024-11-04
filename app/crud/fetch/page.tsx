import TodoList from "./todoList";
import { getTodos } from "@/app/request/todo";
import { TodoType } from "@/types/todo";
export default async function Page() {
    const todos: TodoType[] = await getTodos();
    return (
        <TodoList todos={todos} />
    );
}
