"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ScrollComponent } from "@/components/shadcn_components/scroll";

export default function Page() {
  return (
    <div className="">
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm">スクロール</p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm">何かしらスクロールしたい時に容易に使う</p>
      </div>
      <Table className="table-auto w-full border-2 border-gray-300">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-1/5">- / 関連自作component</TableHead>
            <TableHead className="w-2/5">
              Props
            </TableHead>
            <TableHead className="w-2/5">例</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell className="">ScrollComponent</TableCell>
            <TableCell className="">
              -
            </TableCell>
            <TableCell className="">
              <ScrollComponent />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
