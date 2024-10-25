import { Control, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { twMerge } from "tailwind-merge";

type FormTextareaProps<T extends FieldValues, S extends FieldPath<T>> = {
  control: Control<T> | undefined;
  name: S;
  placeholder: string;
  maxStrLength: number;
  label?: string;
  description?: string;
  textareaFieldCss?: string;
  textareaCss?: string;
  readOnly?: boolean;
  isHideStrLength?: boolean;
  rows?: number;
};

export const FormTextarea = <T extends FieldValues, S extends FieldPath<T>>({
  control,
  name,
  placeholder,
  maxStrLength,
  label,
  description,
  textareaFieldCss,
  textareaCss,
  readOnly,
  isHideStrLength,
  rows = 5,
}: FormTextareaProps<T, S>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={textareaFieldCss}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea rows={rows} placeholder={placeholder} className={twMerge("resize-none", textareaCss)} {...field} readOnly={readOnly} />
          </FormControl>
          <div className="flex">
            {description && <FormDescription>{description}</FormDescription>}
            {!isHideStrLength && (
              <div className="text-right text-gray-400 text-sm ml-auto">
                {field.value.length ?? 0} / {maxStrLength}
              </div>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
