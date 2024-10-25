import { SheetComponent } from "@/components/shadcn_components/sheet"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Sheet</h2>
        <SheetComponent />
        <p className="text-sm mt-5">上下左右からメニューを出せる。ハンバーガーメニューやQR会員証などに使える。これも共通化は不要かな</p>
      </div>
    </>
  )
}
