import { getDomain } from "@/lib/serverCommon";

export async function getTodo(id: number) {
    const res = await fetch(
        `${getDomain()}/api/todos?id=${id}`,
        {
            method: 'GET', 
            // cache: "no-store"
            next: {revalidate: 30}
        }
    );
    const data = await res.json();
    return data.todo;
}

export async function getTodos() {
    const res = await fetch(
        `${getDomain()}/api/todos`, 
        {
            method: 'GET', 
            // cache: "no-store"
            next: {revalidate: 30}
        }
    );
    const data = await res.json();
    return data.todos;
}