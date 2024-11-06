import { z } from "zod";

export const todoCreateSchema = z.object({
    title: z.string({ required_error: "タイトルは必須です" }),
    content: z.string({ required_error: "詳細は必須です" })
});
export const todoEditSchema = z.object({
    id: z.number({ required_error: "IDは必須です" }),
    title: z.string({ required_error: "タイトルは必須です" }),
    content: z.string({ required_error: "詳細は必須です" })
});
