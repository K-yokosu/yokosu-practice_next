"use client";
import React, { useState } from "react";
import { ListType, SearchType } from "../page";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { changeInputHandler } from "@/lib/common";
import { makePath, PATH_SAMPLE_ROUTECACHE } from "@/lib/paths";

type Props = {
    lists: ListType[];
    initSearchParams: SearchType;
};

export default function List({ lists, initSearchParams }: Props) {
    const router = useRouter();
    const [searchParams, setSearchParams] = useState<SearchType>(initSearchParams);

    return (
        <div>
            <div className="flex space-x-1flex items-center gap-x-3 mb-4">
                <Input
                    onChange={e => {
                        changeInputHandler(e, "id", searchParams, setSearchParams);
                    }}
                    value={searchParams.id}
                    placeholder="ID"
                    className="w-1/3"
                    type="number"
                />
                <Button
                    onClick={() => {
                        router.push(
                            makePath(PATH_SAMPLE_ROUTECACHE, [], {
                                id: searchParams.id
                            })
                        );
                    }}
                    className="h-10"
                >
                    検索
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">id</TableHead>
                        <TableHead>name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {lists.map(list => (
                        <TableRow key={list.id}>
                            <TableCell className="font-medium">{list.id}</TableCell>
                            <TableCell>{list.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
