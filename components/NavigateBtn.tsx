"use client";

import { useRouter } from "next/navigation";

export const NavigateBtn = ({ url }: { url: string }) => {
    const router = useRouter();
    return (
        <button className="bg-blue-400 text-white p-2 rounded-lg" onClick={() => router.push(url)}>
            新規登録
        </button>
    );
};
