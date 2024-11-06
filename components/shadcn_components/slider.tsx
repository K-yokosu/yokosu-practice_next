import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderComponent({ className, ...props }: SliderProps) {
    return <Slider defaultValue={[50]} max={100} step={20} className={cn("w-[60%]", className)} {...props} />;
}
