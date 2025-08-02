"use client";

import {Calendar as CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import type {DateRange} from "react-day-picker";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface CalendarDateRangePickerProps {
    date: DateRange | undefined;
    setDate: (range: DateRange | undefined) => void;
    className?: string;
}

export function CalendarDateRangePicker({
                                            date,
                                            setDate,
                                            className,
                                        }: CalendarDateRangePickerProps) {
    const today = new Date();
    const currentRange: DateRange = date ?? {from: today, to: undefined};

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[260px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4"/>
                        {currentRange?.from ? (
                            currentRange.to ? (
                                <>
                                    {format(currentRange.from, "dd/MM/yyyy")} -{" "}
                                    {format(currentRange.to, "dd/MM/yyyy")}
                                </>
                            ) : (
                                format(currentRange.from, "dd/MM/yyyy")
                            )
                        ) : (
                            <span>Sélectionnez une période</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={currentRange.from}
                        selected={currentRange}
                        onSelect={setDate}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
