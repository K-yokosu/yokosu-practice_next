import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { twMerge } from "tailwind-merge";
type Props = {
    id: string;
    label: string;
    switchCss?: string;
};
export function SwitchComponent({ id, label, switchCss }: Props) {
    return (
        <div className={twMerge("flex items-center space-x-2", switchCss)}>
            <Switch id={id} />
            <Label htmlFor={id}>{label}</Label>
        </div>
    );
}
