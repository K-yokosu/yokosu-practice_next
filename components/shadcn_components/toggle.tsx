import { Toggle, ToggleVariantType, ToggleSizeVariantType } from "@/components/ui/toggle"

type Props = {
    children: React.ReactNode;
    toggleCss?: string;
    variant?: ToggleVariantType;
    size?: ToggleSizeVariantType;
    disable?: boolean
}
export function ToggleComponent({toggleCss, children, variant = "default", size = "default", disable = false}: Props) {
  return (
    <Toggle aria-label="Toggle italic" variant={variant} size={size} className={toggleCss} disabled={disable}>
      {children}
    </Toggle>
  )
}