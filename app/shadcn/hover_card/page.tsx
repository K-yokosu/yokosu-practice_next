"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Page() {
  return (
    <div className="">
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm">ホバーした時にコンテンツを出す</p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm">ツールチップと同じことやってるがコンテンツの量が違うので、より詳細に書きたいときに使う</p>
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
              -
            </TableCell>
            <TableCell className="">
              <HoverCardDemo />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}