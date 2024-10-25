import { ToggleComponent } from "@/components/shadcn_components/toggle"
import { ToggleGroupComponent } from "@/components/shadcn_components/toggle_group"
import {
    FontBoldIcon,
  } from "@radix-ui/react-icons"
// import { TOGGLE_VARIANT_TYPE, TOGGLE_SIZE_VARIANT_TYPE } from "@/components/ui/toggle"

export default function Page() {
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Toggle</h2>
        <ToggleComponent toggleCss={"text-2xl"} size="lg" variant="outline" disable={false}>
            <div className="flex items-center">
                <FontBoldIcon className="h-4 w-4" />
                <div>abc</div>
            </div>
        </ToggleComponent>
        <p className="text-sm mt-5">hover時に背景色が変化するのと、クリックで背景反転するだけ。使用機会ないかも</p>

        <h2 className="text-xl mt-4">Toggle Group</h2>
        <ToggleGroupComponent
            toggleCss="justify-start"
            type="single"
            variant="outline"
            size="lg"
            disable={false}
            items={[
                {
                    value: "a",
                    areaLabel: "a",
                    children: 
                    <div className="flex items-center">
                        <FontBoldIcon className="h-4 w-4" />
                        <div>a</div>
                    </div>
                },
                {
                    value: "b",
                    areaLabel: "b",
                    children: 
                    <div className="flex items-center">
                        <FontBoldIcon className="h-4 w-4" />
                        <div>b</div>
                    </div>
                },
                {
                    value: "c",
                    areaLabel: "c",
                    children: 
                    <div className="flex items-center">
                        <FontBoldIcon className="h-4 w-4" />
                        <div>c</div>
                    </div>
                }
            ]}
        />
        <p className="text-sm mt-5">hover時に背景色が変化するのと、クリックで背景反転する、type="single"でtabのように出来る。使用機会ないかも</p>
      </div>
    </>
  )
}
