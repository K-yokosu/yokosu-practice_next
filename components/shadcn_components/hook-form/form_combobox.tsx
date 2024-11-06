import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import ComboboxWithClear, { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";

type FormComboboxProps<T extends FieldValues, S extends FieldPath<T>> = {
    control: Control<T> | undefined;
    name: S;
    placeholder: string;
    options: OptionsType;
    label?: string;
    description?: string;
    comboCss?: string;
    closeBtnCss?: string;
    closeIconCss?: string;
    disabled?: boolean;
};

export const FormCombobox = <T extends FieldValues, S extends FieldPath<T>>({
    control,
    name,
    label,
    placeholder,
    options,
    description,
    comboCss,
    closeBtnCss,
    closeIconCss,
    disabled
}: FormComboboxProps<T, S>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    {label && <FormLabel>{label}</FormLabel>}
                    <ComboboxWithClear
                        title={placeholder}
                        value={options.find(item => item.value === field.value)?.label ?? ""}
                        onChange={value => field.onChange(Number(value))}
                        onClear={() => field.onChange(undefined)}
                        options={options}
                        comboCss={comboCss}
                        closeBtnCss={closeBtnCss}
                        closeIconCss={closeIconCss}
                        disabled={disabled}
                    />
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
