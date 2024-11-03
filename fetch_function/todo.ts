
export async function getTodo(id: number) {
    // console.log('getTodo dayo');
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/todos?id=${id}`,
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
        `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/todos`, 
        {
            method: 'GET', 
            // cache: "no-store"
            next: {revalidate: 30}
        }
    );
    const data = await res.json();
    return data.todos;
}