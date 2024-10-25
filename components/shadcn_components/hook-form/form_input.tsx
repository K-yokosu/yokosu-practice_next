import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";

type FormInputProps<T extends FieldValues, S extends FieldPath<T>> = {
  control: Control<T> | undefined;
  name: S;
  placeholder: string;
  label?: string;
  description?: string;
  inputCss?: string;
  disabled?: boolean;
  inputType?: string;
};

export const FormInput = <T extends FieldValues, S extends FieldPath<T>>({
  control,
  name,
  label,
  placeholder,
  description,
  inputCss,
  disabled,
  inputType = "text"
}: FormInputProps<T, S>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={inputCss}
              disabled={disabled}
              type={inputType}
              onChange={e => field.onChange(inputType === "number" ? Number(e.target.value) : e.target.value)}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
