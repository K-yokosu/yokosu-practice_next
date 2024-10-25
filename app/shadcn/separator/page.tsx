"use client";

import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Slider</h2>

        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
        <p className="mt-5">縦横にできるのがありがたい</p>
      </div>
    </>
  )
}
