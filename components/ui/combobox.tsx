"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";

type Props = {
  title?: string;
  value: string | undefined; // labelがくる
  onChange: (value: number) => void;
  options: OptionsType;
  children?: React.ReactNode;
  comboCss?: string;
  disabled?: boolean;
};

export function Combobox({ title = "選択されていません", value, onChange, options, children, comboCss, disabled = false }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      <Popover open={open} onOpenChange={open => setOpen(open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={twMerge("justify-between flex items-center border-2 rounded-md p-2 bg-RT-light-gray w-full overflow-hidden", comboCss)}
          >
            {/* 選択したoptionのラベルを表示する */}
            <div className="overflow-hidden text-left">{value ? options.find(_ => _.label === value)?.label : <span className="text-RT-placeholder">{title}</span>}</div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="検索 ..." />
            <CommandList>
              <CommandEmpty>該当なし</CommandEmpty>
              <CommandGroup>
                {options.map(list => (
                  <CommandItem
                    key={list.value}
                    // 入力の場合はvalueだと検索ヒットしないのでlabelを持たせる
                    value={list.label}
                    onSelect={currentValue => {
                      // propsのvalueの正体はlabelなのでセレクトは機能する
                      // onChangeでlist.valueを返すことでformはstateで保持している値をそのまま使える
                      if (currentValue !== value) onChange(list.value);
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === String(list.value) ? "opacity-100" : "opacity-0")} />
                    {list.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {!disabled && children}
    </div>
  );
}
