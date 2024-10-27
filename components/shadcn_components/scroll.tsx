import * as React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type ScrollType = {
  children: React.ReactNode;
  type?: "auto" | "always" | "scroll" | "hover"; // scroll bar の表示タイミング
  scrollHideDelay?: number; // type = scroll or hover の発動。ユーザーがスクロールバーの操作を停止してからスクロールバーが非表示になるまでの時間 (ミリ秒単位) を決定
  dir?: "ltr" | "rtl"; // スクロール方向
  nonce?: string; // セキュリティ対策
}
export function ScrollComponent({children, type, scrollHideDelay, dir, nonce}: ScrollType) {
  return (
    <ScrollArea className="h-20 w-48 rounded-md border" type={type} scrollHideDelay={scrollHideDelay} dir={dir} nonce={nonce}>
      {children}
    </ScrollArea>
  )
}
