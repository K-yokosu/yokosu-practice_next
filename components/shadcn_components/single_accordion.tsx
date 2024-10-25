import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  content: () => React.ReactNode;
  accordionCss?: string;
  isOpen?: boolean;
};

export function SingleAccordion({ children, content, accordionCss, isOpen = false }: Props) {
  return (
    <Accordion defaultValue={isOpen ? "item-1" : ""} type="single" collapsible className={twMerge("w-full", accordionCss)}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {children}
        </AccordionTrigger>
        <AccordionContent>{content()}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}