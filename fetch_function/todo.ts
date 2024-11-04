// import { getDomain } from "@/lib/serverCommon";
// import { TodoType } from "@/types/todo";

// // ここ今使うことないけど練習pjやし一応置いとこか
// export async function getTodo(id: number): Promise<TodoType | null> {
//     const res = await fetch(
//         `${getDomain()}/api/todos?id=${id}`,
//         {
//             method: 'GET', 
//             // cache: "no-store"
//             next: {revalidate: 30},
//         }
//     ).then(res => res.json());
//     const todo: TodoType | null = res.todo ? {...res.todo} : null;
//     return todo;
// }

// export async function getTodos(): Promise<TodoType[]> {
//     const res = await fetch(
//         `${getDomain()}/api/todos`, 
//         {
//             method: 'GET', 
//             // cache: "no-store"
//             next: {revalidate: 30}
//         }
//     ).then(res => res.json());
//     const todos: TodoType[] = res.todos;
//     return todos;
// }