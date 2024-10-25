"use client";

import { ScrollComponent } from "@/components/shadcn_components/scroll";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Scroll</h2>

        <ScrollComponent />
        
        <p className="mt-5">基本childrenとcssのみなので共通化不要。</p>
      </div>
    </>
  )
}
