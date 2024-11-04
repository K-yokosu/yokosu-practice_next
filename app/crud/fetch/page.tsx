import TodoList from "./todoList";
import { getTodos } from "@/fetch_function/todo";
import { TodoType } from "@/types/todo";
export default async function Page() {
    const todos: TodoType[] = await getTodos();
    // const todos = await prisma.todos.findMany();
    return (
        <TodoList todos={todos} />
    );
}
