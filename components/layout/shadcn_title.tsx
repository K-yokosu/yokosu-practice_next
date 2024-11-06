"use client";

import { usePathname } from "next/navigation";

export function ShadcnTitle() {
    const pathArr = usePathname().split("/");
    const path = pathArr[pathArr.length - 1];
    return <h1 className="text-3xl font-bold">{path}</h1>;
}
