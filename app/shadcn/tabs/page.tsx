"use client";

import { SliderComponent } from "@/components/shadcn_components/slider";
import { TabsComponent } from "@/components/shadcn_components/tabs";
export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Tabs</h2>

        <TabsComponent />
        <p className="mt-5">共通化もうめんどいので不要。トリガーとコンテンツ渡せば良い</p>
      </div>
    </>
  )
}
