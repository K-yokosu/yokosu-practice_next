import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";

type FormCheckboxesProps<T extends FieldValues, S extends FieldPath<T>> = {
  control: Control<T> | undefined;
  name: S;
  options: OptionsType;
  label?: string;
  description?: string;
  checkFieldCss?: string;
  checkCss?: string;
  disabled?: boolean;
};

export const FormCheckboxes = <T extends FieldValues, S extends FieldPath<T>>({
  control,
  name,
  label,
  options,
  description,
  checkFieldCss,
  checkCss,
  disabled
}: FormCheckboxesProps<T, S>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            {label && <FormLabel>{label}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <div className={checkFieldCss}>
            {options.map(item => (
              <FormField
                key={item.value}
                control={control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem key={item.value} className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.value)}
                          onCheckedChange={checked => {
                            return checked ? field.onChange([...field.value, item.value]) : field.onChange(field.value?.filter((value: number) => value !== item.value));
                          }}
                          disabled={disabled}
                          className={checkCss}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
