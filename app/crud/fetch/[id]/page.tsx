import TodoView from "./todoView";
import { getTodo } from "@/fetch_function/todo";
import prisma from '@/lib/prisma'
import NotFound from "@/app/not-found";

export default async function Page({ params }: {params: {id: string}}) {
    const id = Number(params.id);
    // const todo = await getTodo(id);
    const todo = await prisma.todos.findUnique({ where: { id } });
    if(todo){
        return (
            <TodoView todo={todo} />
        );
    }else{
        NotFound();
    }
    
}
