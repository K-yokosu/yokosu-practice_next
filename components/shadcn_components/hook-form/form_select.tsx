import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";
import { SelectWithClear } from "@/components/shadcn_components/form/select_with_clear";

type FormSelectProps<T extends FieldValues, S extends FieldPath<T>> = {
    control: Control<T> | undefined;
    name: S;
    placeholder: string;
    options: OptionsType;
    label?: string;
    description?: string;
    selectCss?: string;
    closeBtnCss?: string;
    closeIconCss?: string;
    disabled?: boolean;
};

export const FormSelect = <T extends FieldValues, S extends FieldPath<T>>({
    control,
    name,
    label,
    placeholder,
    options,
    description,
    selectCss,
    closeBtnCss,
    closeIconCss,
    disabled
}: FormSelectProps<T, S>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    {label && <FormLabel>{label}</FormLabel>}
                    <SelectWithClear
                        title={placeholder}
                        value={field.value}
                        onChange={value => field.onChange(Number(value))}
                        onClear={() => field.onChange(undefined)}
                        options={options}
                        selectCss={selectCss}
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
