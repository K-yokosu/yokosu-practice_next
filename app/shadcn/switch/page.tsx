import { SwitchComponent } from "@/components/shadcn_components/switch"

export default function Page() {
  
    return (
      <>
        <div className="mb-8">
          <h2 className="text-xl mt-4">Table</h2>
          <SwitchComponent
            id="abc"
            label="abc"
            switchCss="space-x-8"
          />
          <p className="text-sm mt-5">switchした時の値を回収するフローが必要になるかな？でもwebではあまり使うことないかもしれん</p>
        </div>
      </>
    )
  }
  