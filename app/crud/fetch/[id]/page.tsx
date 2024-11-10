import { getTodo } from "@/request/todo";
import NotFound from "@/app/not-found";
import { ScreenType } from "@/const/common";
import TodoClient from "../_content/todoClient";

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const todo = await getTodo(id);
    if (todo) {
        return <TodoClient todo={todo} screenType={ScreenType.view} />;
    } else {
        NotFound();
    }
}
