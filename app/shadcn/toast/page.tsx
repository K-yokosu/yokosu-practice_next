"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ToastComponent } from "@/components/shadcn_components/toast";
// other
import { VARIANT_TYPE } from "@/hooks/use-toast";

export default function Page() {
  return (
    <div className="">
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm">API処理結果など一時的なポップアップを出力する</p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm">リクエスト処理結果の成功や失敗メッセージを出力する時など</p>
        <h2 className="font-bold text-lg mt-2">使用法</h2>
        <ul className="text-sm mt-5">
          <li>app/layout.tsx にてToasterを追記する</li>
          <li>components/ui/toast.tsx にてtoastVariantsのプロパティを追加する</li>
          <li>hooks/use-toast.ts にてVARIANT_TYPEを定義する</li>
        </ul>
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
            <TableCell className="">ToastComponent</TableCell>
            <TableCell className="">
              -
            </TableCell>
            <TableCell className="">
              <ToastComponent title="success" description="success success" variant={VARIANT_TYPE.success} />
              <ToastComponent title="warning" description="warning warning" variant={VARIANT_TYPE.warning} />
              <ToastComponent title="destructive" description="destructive destructive" variant={VARIANT_TYPE.destructive} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
