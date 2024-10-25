"use client";

import { Input } from "@/components/ui/input";
import CalendarPicker, { DisableOption } from "@/components/shadcn_components/form/calendar_picker";

type Props = {
  title?: string;
  date: string;
  setDate: (value: string) => void;
  trigerElementCss?: string;
  contentCss?: string;
  disabledOption?: DisableOption;
  specifiedDate?: string;
  disabled?: boolean;
};

export default function CalendarPickerWithInput({ title = "", date, setDate, trigerElementCss, contentCss, disabledOption, specifiedDate, disabled }: Props) {
  return (
    <CalendarPicker date={date} setDate={setDate} contentCss={contentCss} disabledOption={disabledOption} specifiedDate={specifiedDate}>
      <Input type={"text"} disabled={disabled} value={date} onChange={e => setDate(e.target.value)} placeholder={title} className={trigerElementCss} />
    </CalendarPicker>
  );
}
