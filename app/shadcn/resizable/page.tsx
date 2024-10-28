"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

// direction 水平 or 垂直方向への変更を指定
// handle にwithhandleをつけるとグリップしやすくなるようにアイコンを出せる。これは変更可能

export default function Page() {
  return (
    <div className="">
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm">サイズ変更可能なパネルグループとレイアウトを提供</p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm">画面幅を調整したい時。NotionやArcのサイドバーのようにワンクリックで隠すみたいなのができそう</p>
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
            <TableCell className="">-</TableCell>
            <TableCell className="">
              direction="horizontal"
            </TableCell>
            <TableCell className="">
              <ResizablePanelGroup
                direction="horizontal"
                className="max-w-md rounded-lg border md:min-w-[450px]"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Three</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">Separator</TableCell>
            <TableCell className="">
              -
            </TableCell>
            <TableCell className="">
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
              >
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">Separator</TableCell>
            <TableCell className="">
              -
            </TableCell>
            <TableCell className="">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>One</ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>Two</ResizablePanel>
              </ResizablePanelGroup>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
