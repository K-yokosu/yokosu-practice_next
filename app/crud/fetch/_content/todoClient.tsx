"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLoadingStore from "@/stores/useLoadingStore";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shadcn_components/hook-form/form_input";
import { FormTextarea } from "@/components/shadcn_components/hook-form/textare";
import Link from "next/link";
import { makePath, PATH_CRUD_FETCH_EDIT } from "@/lib/paths";
import { ScreenType } from "@/const/common";
import { TodoType } from "@/types/todo";
import { updateTodo } from "@/app/crud/actions/todoActions";

const MAX_STR_LENGTH: number = 10000;
export const TodoSchema = z.object({
    id: z.number(),
    title: z.string().min(1, {
        message: "title must be at least 1 characters."
    }),
    content: z.string().min(1, {
        message: "content must be at least 1 characters."
    })
});

export default function TodoClient({ todo, screenType }: { todo: TodoType; screenType: number }) {
    const router = useRouter();
    const { setLoading } = useLoadingStore();
    const controlDisable: boolean = screenType === ScreenType.view;

    const form = useForm<z.infer<typeof TodoSchema>>({
        resolver: zodResolver(TodoSchema),
        defaultValues: {
            id: todo.id,
            title: todo.title,
            content: todo.content
        }
    });
    const { control, handleSubmit } = form;

    const onSubmit = async (values: z.infer<typeof TodoSchema>) => {
        setLoading(true);
        try {
            await updateTodo(values.id, values);
            router.push("/crud/fetch");
            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="font-bold text-2xl mb-4">Todo {controlDisable ? "詳細" : "編集"}</h1>
            {controlDisable && (
                <div className="flex justify-end items-center my-4">
                    <Link href={makePath(PATH_CRUD_FETCH_EDIT, [todo.id])} className="border bg-blue-400 text-white rounded-lg p-2">
                        編集へ
                    </Link>
                </div>
            )}
            <div className="bg-white">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <FormInput control={control} name={"title"} placeholder={"入力してください"} label={"タイトル"} inputCss={"w-1/3"} disabled={controlDisable} />

                        <FormTextarea
                            control={control}
                            name={"content"}
                            placeholder={"入力してください"}
                            maxStrLength={MAX_STR_LENGTH}
                            label={"内容"}
                            textareaFieldCss="w-full"
                            textareaCss="resize"
                            readOnly={controlDisable}
                            isHideStrLength={false}
                            rows={10}
                        />

                        {!controlDisable && <Button type="submit">Submit</Button>}
                    </form>
                </Form>
            </div>
        </>
    );
}
