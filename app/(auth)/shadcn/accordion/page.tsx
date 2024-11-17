"use client";

// library
import React from "react";
import { ChevronDown } from "lucide-react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { SingleAccordion } from "@/components/shadcn_components/single_accordion";
import { MultipleAccordion, AccordionType } from "@/components/shadcn_components/multiple_accordion";

export default function Page() {
    const accordionContent: React.ReactNode = (
        <div className={`flex flex-col gap-y-5`}>
            <div className="flex flex-col gap-y-1 w-full">item 1</div>
            <div className="flex flex-col gap-y-1 w-full">item 2</div>
            <div className="flex flex-col gap-y-1 w-full">item 3</div>
        </div>
    );

    const accorionTriger: React.ReactNode = (
        <>
            <div className="font-medium">open</div>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </>
    );

    const multipleAccordionItems: AccordionType[] = [
        { children: accorionTriger, content: () => accordionContent, value: "accordion1" },
        { children: accorionTriger, content: () => accordionContent, value: "accordion2" },
        { children: accorionTriger, content: () => accordionContent, value: "accordion3" }
    ];
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">メニューやコンテンツを折りたたみ使用感をよくする</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">サイドバーや長ったらしいコンテンツを折りたたむ</p>
                <h2 className="font-bold text-lg mt-2">使用法</h2>
                <ul className="text-sm mt-5">
                    <li>トリガーのiconを除去したい場合は、components/ui/accordion.tsx AccordionTrigger内のChevronDownを削除する</li>
                    <li>iconの有無が混在する場合はトリガーノードにiconを加える</li>
                </ul>
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
                        <TableCell className="">SingleAccordion</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <SingleAccordion isOpen={false} content={() => accordionContent}>
                                {accorionTriger}
                            </SingleAccordion>
                        </TableCell>
                    </TableRow>
                    <TableRow className="">
                        <TableCell className="">MultipleAccordion</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <MultipleAccordion items={multipleAccordionItems} defautValue={"accordion2"} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
