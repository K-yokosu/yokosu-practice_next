"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { SonnerComponent } from "@/components/shadcn_components/sonner";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">Mac のウィジェットの様なUIで、Toastの1種</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">C向けの通知多めのサービスならこちらのToastが良いかもしれない</p>
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
                        <TableCell className="">SonnerComponent</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <SonnerComponent />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
