import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type childrenType = {
    value: string;
    areaLabel: string;
    children: React.ReactNode;
};
type Props = {
    items: childrenType[];
    type?: "multiple" | "single";
    toggleCss?: string;
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    disable?: boolean;
};
export function ToggleGroupComponent({ items, toggleCss, type = "multiple", variant = "default", size = "default", disable = false }: Props) {
    return (
        <ToggleGroup type={type} variant={variant} size={size} disabled={disable} className={toggleCss}>
            {items.map(item => {
                return (
                    <ToggleGroupItem key={item.areaLabel} value={item.value} aria-label={item.areaLabel}>
                        {item.children}
                    </ToggleGroupItem>
                );
            })}
        </ToggleGroup>
    );
}
