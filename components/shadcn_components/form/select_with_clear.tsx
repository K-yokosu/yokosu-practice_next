import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { OptionsType } from "../form/combobox_with_clear";
import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  onClear: () => void;
  options: OptionsType;
  selectCss?: string;
  closeBtnCss?: string;
  closeIconCss?: string;
  disabled?: boolean;
};

export function SelectWithClear({ title = "選択してください", value, onChange, options, onClear, closeBtnCss, closeIconCss, selectCss, disabled = false }: Props) {
  return (
    <div className="flex">
      <Select onValueChange={item => onChange(Number(item))} value={value ? String(value) : ""}>
        <SelectTrigger disabled={disabled} className={twMerge(`w-full ${value ? "text-RT-black" : "text-RT-placeholder"}`, selectCss)}>
          <SelectValue placeholder={title} className="text-blue-300" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{title}</SelectLabel>
            {options.map(list => (
              <SelectItem key={list.value} value={String(list.value)}>
                {list.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {!disabled && (
        <Button type="button" onClick={onClear} className={twMerge("bg-black text-white rounded-md flex items-center justify-center p-0 w-12", closeBtnCss)}>
          <Cross2Icon className={closeIconCss} />
        </Button>
      )}
    </div>
  );
}
