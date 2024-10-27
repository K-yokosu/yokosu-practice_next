"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ScrollComponent } from "@/components/shadcn_components/scroll";
import { Separator } from "@/components/ui/separator"

const tags = [
  {id:1,name:"aaa"},
  {id:2,name:"bbb"},
  {id:3,name:"ccc"},
]

export default function Page() {
  return (
    <div className="">
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm">スクロール</p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm">何かしらスクロールしたい時に容易に使う</p>
        <h2 className="font-bold text-lg mt-2">備考</h2>
        <p className="text-sm">asChildはここでほんまに使えるんか？という感じ。scrollbar で横向きにしたり、dirで方向変えれたりしそうだけどうまくいかない</p>
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
              type="auto"
            </TableCell>
            <TableCell className="">
              <ScrollComponent type="auto">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                      <div key={tag.id}>
                        <div className="text-sm">
                          {tag.name}
                        </div>
                        <Separator className="my-2" />
                      </div>
                  ))}
                </div>
              </ScrollComponent>
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">ScrollComponent</TableCell>
            <TableCell className="">
              type="scroll" <br />
              scrollHideDelay={0}
            </TableCell>
            <TableCell className="">
              <ScrollComponent type="scroll" scrollHideDelay={0}>
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                      <div key={tag.id}>
                        <div className="text-sm">
                          {tag.name}
                        </div>
                        <Separator className="my-2" />
                      </div>
                  ))}
                </div>
              </ScrollComponent>
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">ScrollComponent</TableCell>
            <TableCell className="">
              type="scroll" <br />
              scrollHideDelay={600}
            </TableCell>
            <TableCell className="">
              <ScrollComponent type="scroll" scrollHideDelay={600}>
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                      <div key={tag.id}>
                        <div className="text-sm">
                          {tag.name}
                        </div>
                        <Separator className="my-2" />
                      </div>
                  ))}
                </div>
              </ScrollComponent>
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">ScrollComponent</TableCell>
            <TableCell className="">
              type="hover" <br />
              scrollHideDelay={600}
            </TableCell>
            <TableCell className="">
              <ScrollComponent type="hover" scrollHideDelay={600}>
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                      <div key={tag.id}>
                        <div className="text-sm">
                          {tag.name}
                        </div>
                        <Separator className="my-2" />
                      </div>
                  ))}
                </div>
              </ScrollComponent>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
