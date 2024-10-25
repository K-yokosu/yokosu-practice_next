import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";

export type AccordionType = {
    children: React.ReactNode;
    content?: () => React.ReactNode;
    value: string;
}

type Props = {
  items: AccordionType[];
  accordionCss?: string;
  defautValue?: string;
};

export function MultipleAccordion({ items, accordionCss, defautValue = "" }: Props) {
  return (
    <Accordion defaultValue={defautValue} type="single" collapsible className={twMerge("w-full", accordionCss)}>
        {items.map(item => {
            return (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>
                        {item.children}
                    </AccordionTrigger>
                    {item.content && <AccordionContent>{item.content()}</AccordionContent>}
                </AccordionItem>
            );
        })}
      
    </Accordion>
  );
}