"use client";

import { format } from "date-fns";
import { useState, useEffect, useRef, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

type Props = {
    date: string;
    setDate: (value: string) => void;
};

export default function DrumRoleDatePicker({ date, setDate }: Props) {
    const selectedDate: Date = date ? new Date(date) : new Date();
    const currentYear: number = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth() + 1);
    const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());
    const yearOptionRange: number = 5;

    const years: number[] = range(currentYear - yearOptionRange, currentYear + yearOptionRange);
    const months: number[] = range(1, 12);
    const [days, setDays] = useState(range(1, getDaysInMonth(selectedYear, selectedMonth)));

    const yearRef = useRef<HTMLDivElement>(null);
    const monthRef = useRef<HTMLDivElement>(null);
    const dayRef = useRef<HTMLDivElement>(null);

    const scrollToSelected = useCallback(() => {
        const scrollToMiddle = (ref: React.RefObject<HTMLDivElement>, index: number) => {
            if (ref.current) {
                const containerHeight = ref.current.clientHeight;
                const itemHeight = 40;
                const scrollPosition = index * itemHeight - containerHeight / 2 + itemHeight / 2 + 80;
                ref.current.scrollTop = Math.max(0, scrollPosition);
            }
        };

        scrollToMiddle(yearRef, (selectedYear - currentYear - yearOptionRange) * -1);
        scrollToMiddle(monthRef, selectedMonth - 1);
        scrollToMiddle(dayRef, selectedDay - 1);
    }, [selectedYear, selectedMonth, selectedDay, currentYear]);

    useEffect(() => {
        const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
        setDays(range(1, daysInMonth));
        if (selectedDay > daysInMonth) {
            setSelectedDay(daysInMonth);
        }
    }, [selectedYear, selectedMonth, selectedDay]);

    useEffect(() => {
        scrollToSelected();
    }, [scrollToSelected]);

    useEffect(() => {
        setDate(format(new Date(selectedYear, selectedMonth - 1, selectedDay), "yyyy/MM/dd"));
    }, [selectedYear, selectedMonth, selectedDay, setDate]);

    const renderScrollArea = (items: number[], selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>, ref: React.RefObject<HTMLDivElement>) => {
        return (
            <ScrollArea className="h-[200px] w-16 rounded-md border relative">
                <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none bg-gradient-to-b from-background to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none bg-gradient-to-t from-background to-transparent z-10" />
                <div className="py-[80px] h-[200px] overflow-y-scroll border-[1px solid black]" ref={ref}>
                    {items.map(item => (
                        <div
                            key={item}
                            className={`h-[40px] flex items-center justify-center cursor-pointer transition-colors duration-200 
                ${item === selected ? "bg-primary text-primary-foreground font-bold" : "hover:bg-accent hover:text-accent-foreground"}`}
                            onClick={() => setSelected(item)}
                            role="option"
                            aria-selected={item === selected}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </ScrollArea>
        );
    };

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardContent className="p-6 flex flex-col items-center">
                <div className="flex space-x-4" role="group" aria-label="日付選択">
                    {renderScrollArea(years.reverse(), selectedYear, setSelectedYear, yearRef)}
                    {renderScrollArea(months, selectedMonth, setSelectedMonth, monthRef)}
                    {renderScrollArea(days, selectedDay, setSelectedDay, dayRef)}
                </div>
                <div className="mt-4 text-center" aria-live="polite">
                    選択された日付: {selectedYear}年 {selectedMonth}月 {selectedDay}日
                </div>
            </CardContent>
        </Card>
    );
}
