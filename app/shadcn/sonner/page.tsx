"use client";

import { SonnerComponent } from "@/components/shadcn_components/sonner";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Slider</h2>

        <SonnerComponent />
        <p className="mt-5">共通化不要。mac のウィジェットの様なUIかな。Toastではあるが複数ためれるイメージ。通知が多い様なサービスであれば特に使えるかな？シンプルなアプリなら普通のToastの方が良いかも。複数溜まった場合に全消しできる機能は欲しいね</p>
      </div>
    </>
  )
}
