"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { SwitchComponent } from "@/components/shadcn_components/switch";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">booleanのデータを表現する方法の1つ</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">何かしらの設定をon/offで表現したい場合など。アプリではよく見るがwebだとcheckboxの方が使うかな</p>
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
                        <TableCell className="">SwitchComponent</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <SwitchComponent id="abc" label="abc" switchCss="space-x-8" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
