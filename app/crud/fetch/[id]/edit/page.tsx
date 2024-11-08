import TodoView from "../todoView";
import { getTodo } from "@/request/todo";
import NotFound from "@/app/not-found";
import { ScreenType } from "@/const/common";

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const todo = await getTodo(id);
    if (todo) {
        return <TodoView todo={todo} screenType={ScreenType.edit} />;
    } else {
        NotFound();
    }
}
