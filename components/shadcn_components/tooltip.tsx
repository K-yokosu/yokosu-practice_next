import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
    children: React.ReactNode;
    content: () => React.ReactNode;
};
export function TooltipComponent({ children, content }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>{content()}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
