"use client";

import { Combobox } from "@/components/ui/combobox";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

export type OptionsType = { value: number; label: string }[];

type Props = {
  title?: string;
  value: string | undefined;
  onChange: (value: number) => void;
  onClear: () => void;
  options: OptionsType;
  comboCss?: string;
  closeBtnCss?: string;
  closeIconCss?: string;
  disabled?: boolean;
};

export default function ComboboxWithClear({ title, value, onChange, onClear, options, comboCss, closeBtnCss, closeIconCss, disabled }: Props) {
  return (
    <Combobox title={title} value={value} onChange={onChange} options={options} comboCss={comboCss} disabled={disabled}>
      <Button type="button" onClick={onClear} className={twMerge("bg-black text-white rounded-md flex items-center justify-center p-0 w-12", closeBtnCss)}>
        <Cross2Icon className={closeIconCss} />
      </Button>
    </Combobox>
  );
}
