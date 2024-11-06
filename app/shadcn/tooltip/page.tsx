"use client";

// library
import React from "react";
// component
import { TooltipComponent } from "@/components/shadcn_components/tooltip";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">コンテンツをホバーした時に仕込んでおいたテキスト(only?)をポップアップする</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">disable理由やグラフのポイントなどで仕込める</p>
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
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">Hover</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableCell>
                    </TableRow>
                    <TableRow className="">
                        <TableCell className="">TooltipComponent</TableCell>
                        <TableCell className="">{"content: () => React.ReactNode"}</TableCell>
                        <TableCell className="">
                            <TooltipComponent content={() => <p>Yeah!</p>}>
                                <Button variant={"outline"}>Hover</Button>
                            </TooltipComponent>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
