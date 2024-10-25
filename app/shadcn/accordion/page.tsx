import { SingleAccordion } from "@/components/shadcn_components/single_accordion"
import { MultipleAccordion, AccordionType } from "@/components/shadcn_components/multiple_accordion"
import { ChevronDown } from "lucide-react"

export default function Page() {
  const accordionContent: React.ReactNode = (
    <div className={`flex flex-col gap-y-5`}>
      <div className="flex flex-col gap-y-1 w-full">item 1</div>
      <div className="flex flex-col gap-y-1 w-full">item 2</div>
      <div className="flex flex-col gap-y-1 w-full">item 3</div>
    </div>
  );

  const accorionTriger: React.ReactNode = <>
    <div className="font-medium">open</div>
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </>

  const multipleAccordionItems: AccordionType[] = [
    {children: accorionTriger, content: () => accordionContent, value: "accordion1"},
    {children: accorionTriger, content: () => accordionContent, value: "accordion2"},
    {children: accorionTriger, content: () => accordionContent, value: "accordion3"},
  ]
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Single Accordion</h2>
        <SingleAccordion
          isOpen={false}
          content={() => accordionContent}
        >
          {accorionTriger}
        </SingleAccordion>

        <h2 className="text-xl mt-4">Multiple Accordion</h2>
        <MultipleAccordion
          items={multipleAccordionItems}
          defautValue={"accordion2"}
        />
      </div>
      <p className="text-sm">※ もしトリガーのiconを除去したければ components/ui/accordion.tsx AccordionTrigger内のChevronDownを削除すること。iconの有無が混在する場合はトリガーノードにiconを加える</p>
    </>
  )
}
