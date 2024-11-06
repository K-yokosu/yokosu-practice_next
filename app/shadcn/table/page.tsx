"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { TableComponent } from "@/components/shadcn_components/table";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">データの一覧を表示したり、個別データへの導線となる</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">Get取得した一覧データを受け皿</p>
            </div>
            <Table className="table-auto w-full border-2 border-gray-300">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="w-1/5">- / 関連自作component</TableHead>
                        <TableHead className="w-2/5">Props</TableHead>
                        <TableHead className="w-2/5">例</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="">
                        <TableCell className="">TableComponen</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <TableComponent />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
