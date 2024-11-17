import List from "./_content/list";
import { Suspense } from "react";

export type ListType = {
    id: string;
    name: string;
};
export type SearchType = {
    id: string;
};
const Lists: ListType[] = [
    { id: "1", name: "aaa" },
    { id: "2", name: "bbb" },
    { id: "3", name: "ccc" }
];

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
    const id: string = searchParams["id"];
    const tmpSearchParams: SearchType = {
        id: id ? id : ""
    };
    const filteredLists: ListType[] = tmpSearchParams.id ? Lists.filter(list => list.id == tmpSearchParams.id) : Lists;

    return (
        <div className="mb-8">
            <h2 className="text-xl mt-4">Route Cache</h2>
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm"></p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm"></p>
                <h2 className="font-bold text-lg mt-2">備考</h2>
                <p className="text-sm">Route キャッシュの影響で検索結果が残ってしまう事象を再現したかったが、ユーザーセッションが必要とのことなので後日</p>
            </div>

            <Suspense fallback={<div>...Loading</div>}>
                <List lists={filteredLists} initSearchParams={tmpSearchParams} />
            </Suspense>
        </div>
    );
}
