"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">不明</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">不明</p>
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
                        <TableCell className="">-</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <AspectRatio ratio={16 / 9} className="bg-muted">
                                <Image
                                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                    alt="Photo by Drew Beamer"
                                    fill
                                    className="h-full w-full rounded-md object-cover"
                                />
                            </AspectRatio>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
