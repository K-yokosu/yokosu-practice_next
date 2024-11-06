import { Control, FieldPath, FieldValues } from "react-hook-form";
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import CalendarPickerWithInput from "@/components/shadcn_components/form/calendar_picker_with_input";
import { DisableOption } from "@/components/shadcn_components/form/calendar_picker";

type FormDatePickerProps<T extends FieldValues, S extends FieldPath<T>> = {
    control: Control<T> | undefined;
    name: S;
    placeholder: string;
    label?: string;
    description?: string;
    trigerElementCss?: string;
    contentCss?: string;
    disabledOption?: DisableOption;
    specifiedDate?: string;
    disabled?: boolean;
};

export const FormDatePicker = <T extends FieldValues, S extends FieldPath<T>>({
    control,
    name,
    placeholder,
    label,
    description,
    trigerElementCss,
    contentCss,
    disabledOption,
    specifiedDate,
    disabled
}: FormDatePickerProps<T, S>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    {label && <FormLabel>{label}</FormLabel>}
                    <CalendarPickerWithInput
                        title={placeholder}
                        date={field.value}
                        setDate={field.onChange}
                        trigerElementCss={trigerElementCss}
                        contentCss={contentCss}
                        disabledOption={disabledOption}
                        specifiedDate={specifiedDate}
                        disabled={disabled}
                    />
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
