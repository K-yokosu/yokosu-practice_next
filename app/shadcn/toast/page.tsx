"use client";

import { ToastComponent } from "@/components/shadcn_components/toast";
import { VARIANT_TYPE } from "@/hooks/use-toast";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Toast</h2>

        <ToastComponent title="success" description="success success" variant={VARIANT_TYPE.success} />
        <ToastComponent title="warning" description="warning warning" variant={VARIANT_TYPE.warning} />
        <ToastComponent title="destructive" description="destructive destructive" variant={VARIANT_TYPE.destructive} />
        
        <ul className="text-sm mt-5">
          <li>app/layout.tsx にてToasterを追記する</li>
          <li>components/ui/toast.tsx にてtoastVariantsのプロパティを追加する</li>
          <li>hooks/use-toast.ts にてVARIANT_TYPEを定義する</li>
        </ul>
      </div>
    </>
  )
}
