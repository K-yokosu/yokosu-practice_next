import { twMerge } from "tailwind-merge";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";

type FormRadioGroupProps<T extends FieldValues, S extends FieldPath<T>> = {
    control: Control<T> | undefined;
    name: S;
    options: OptionsType;
    label?: string;
    description?: string;
    radioFieldCss?: string;
    radioGroupCss?: string;
    disabled?: boolean;
};

export const FormRadioGroup = <T extends FieldValues, S extends FieldPath<T>>({
    control,
    name,
    label,
    options,
    description,
    radioFieldCss,
    radioGroupCss,
    disabled
}: FormRadioGroupProps<T, S>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={radioFieldCss}>
                    <div className="mb-4">
                        {label && <FormLabel>{label}</FormLabel>}
                        {description && <FormDescription>{description}</FormDescription>}
                    </div>
                    <FormControl>
                        <RadioGroup
                            onValueChange={value => field.onChange(Number(value))}
                            defaultValue={String(field.value)}
                            className={twMerge("flex flex-col", radioGroupCss)}
                            disabled={disabled}
                        >
                            {options.map(item => {
                                return (
                                    <FormItem key={item.value} className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value={String(item.value)} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{item.label}</FormLabel>
                                    </FormItem>
                                );
                            })}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
