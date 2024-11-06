"use client";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import DrumRoleDatePicker from "@/components/shadcn_components/form/drum_role_date_picker";
// import { CheckTabletSize } from "@/lib/checkWindowSize";

export enum DisableOption {
    nothing = 0,
    disablePast = 1, // 本日より過去をdisable
    disableFuture = 2, // 本日より未来をdisable
    selectDateDisablePast = 3, // 指定日より過去をdisable
    selectDateDisableFuture = 4 // 指定日より未来をdisable
}

type Props = {
    children?: React.ReactNode;
    date: string;
    setDate: (value: string) => void;
    contentCss?: string;
    disabledOption?: DisableOption;
    specifiedDate?: string;
};

export default function CalendarPicker({ children, date, setDate, contentCss, disabledOption = DisableOption.nothing, specifiedDate = "" }: Props) {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className={`w-auto p-0 ${contentCss}`} align="start">
                <Calendar
                    mode="single"
                    selected={new Date(date)}
                    onSelect={date => {
                        if (date) setDate(format(date, "yyyy/MM/dd"));
                    }}
                    disabled={date => determineDateDisable(date, disabledOption, specifiedDate)}
                />
            </PopoverContent>
        </Popover>
    );
}

function determineDateDisable(date: Date, selectedDisableOption: DisableOption, specifiedDate: string): boolean {
    switch (selectedDisableOption) {
        case DisableOption.disablePast:
            return date < new Date();
        case DisableOption.disableFuture:
            return date > new Date();
        case DisableOption.selectDateDisablePast:
            return date < new Date(specifiedDate);
        case DisableOption.selectDateDisableFuture:
            return date > new Date(specifiedDate);
        default:
            return date < new Date("1900-01-01");
    }
}
