import { TooltipComponent } from "@/components/shadcn_components/tooltip"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Tooltip</h2>
        <TooltipComponent
            content={() => <p>Yeah!</p>}
        >
            <Button variant={"outline"}>Hover</Button>
        </TooltipComponent>
        <p className="text-sm mt-5">ホバー時に目的のコンテンツをポッと出せる。使える</p>
      </div>
    </>
  )
}
