import { Control, FieldPath, FieldValues } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

type FormCheckboxProps<T extends FieldValues, S extends FieldPath<T>> = {
    control: Control<T> | undefined;
    name: S;
    label?: string;
    description?: string;
    checkFieldCss?: string;
    checkCss?: string;
    disabled?: boolean;
};

export const FormCheckbox = <T extends FieldValues, S extends FieldPath<T>>({ control, name, label, description, checkFieldCss, checkCss, disabled }: FormCheckboxProps<T, S>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={twMerge("flex flex-row items-center space-x-3 space-y-0", checkFieldCss)}>
                    <FormControl>
                        <Checkbox id={label} checked={field.value} onCheckedChange={field.onChange} disabled={disabled} className={checkCss} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        {label && <FormLabel htmlFor={label}>{label}</FormLabel>}
                        {description && <FormDescription>{description}</FormDescription>}
                    </div>
                </FormItem>
            )}
        />
    );
};
