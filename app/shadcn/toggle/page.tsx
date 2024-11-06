"use client";

// library
import React from "react";
import { FontBoldIcon } from "@radix-ui/react-icons";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ToggleComponent } from "@/components/shadcn_components/toggle";
import { ToggleGroupComponent } from "@/components/shadcn_components/toggle_group";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">hover時に背景色を変化させ、クリックで背景反転する</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">単体だとほぼ機会ないかもしれない。グループであればtabのように動作させれる。</p>
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
                        <TableCell className="">ToggleComponent</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <ToggleComponent toggleCss={"text-2xl"} size="lg" variant="outline" disable={false}>
                                <div className="flex items-center">
                                    <FontBoldIcon className="h-4 w-4" />
                                    <div>abc</div>
                                </div>
                            </ToggleComponent>
                        </TableCell>
                    </TableRow>
                    <TableRow className="">
                        <TableCell className="">ToggleGroupComponent</TableCell>
                        <TableCell className="">{/* {"content: () => React.ReactNode"} */}</TableCell>
                        <TableCell className="">
                            <ToggleGroupComponent
                                toggleCss="justify-start"
                                type="single"
                                variant="outline"
                                size="lg"
                                disable={false}
                                items={[
                                    {
                                        value: "a",
                                        areaLabel: "a",
                                        children: (
                                            <div className="flex items-center">
                                                <FontBoldIcon className="h-4 w-4" />
                                                <div>a</div>
                                            </div>
                                        )
                                    },
                                    {
                                        value: "b",
                                        areaLabel: "b",
                                        children: (
                                            <div className="flex items-center">
                                                <FontBoldIcon className="h-4 w-4" />
                                                <div>b</div>
                                            </div>
                                        )
                                    },
                                    {
                                        value: "c",
                                        areaLabel: "c",
                                        children: (
                                            <div className="flex items-center">
                                                <FontBoldIcon className="h-4 w-4" />
                                                <div>c</div>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
