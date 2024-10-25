"use client";

import { SliderComponent } from "@/components/shadcn_components/slider";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Slider</h2>

        <SliderComponent />
        <p className="mt-5">共通化不要。Tooltipで組み合わせるのが良いかな</p>
      </div>
    </>
  )
}
