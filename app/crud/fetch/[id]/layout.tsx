import type { Metadata } from "next";
import { getTodo } from "@/fetch_function/todo";
import { TodoType } from "@/types/todo";
// export const metadata: Metadata = {
//   description: "todo view",
// };
export async function generateMetadata({ params }: {params: {id: string}}) {
    const id = Number(params.id);
    const todo: TodoType = await getTodo(id);

    return {
        description: `todo view ${todo.title}`
    };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
