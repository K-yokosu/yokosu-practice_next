"use client";

import { NavigationMenuDemo } from "@/components/shadcn_components/navigation";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Navigation Menu</h2>

        <NavigationMenuDemo />
        
        <p className="mt-5">ホバーで出現するのが良い。サイドバーがないサービスなら特に使えそう。</p>
      </div>
    </>
  )
}
