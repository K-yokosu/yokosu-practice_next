"use client";

import { TableHead } from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils";
import sortUp from "@/public/images/arrow/rcft_sort_up_icon.svg";
import sortDown from "@/public/images/arrow/rcft_sort_down_icon.svg";

type SortableTableHeadProps = {
  sortConfig: {
    key: string;
    direction: "asc" | "desc";
  } | null;
  sortKey: string;
  name: string;
  text: string;
  sortHandler: () => void;
  className?: string;
};

export const SortableThead = ({ sortConfig, sortKey, name, text, sortHandler, className }: SortableTableHeadProps) => {
  return (
    <TableHead className={cn("", className)} onClick={() => sortHandler()}>
      <div className="flex justify-between items-center space-x-1">
        <span>{text}</span>
        {sortConfig?.key === sortKey && sortConfig.direction === "asc" && (
          <div className=" flex flex-col">
            <Image src={sortUp} width={9} height={9} alt="edit" className="cursor-pointer max-w-[9px] max-h-[9px]" />
          </div>
        )}
        {sortConfig?.key === sortKey && sortConfig.direction === "desc" && (
          <div className=" flex flex-col">
            <Image src={sortDown} width={9} height={9} alt="edit" className="cursor-pointer max-w-[9px] max-h-[9px]" />
          </div>
        )}
        {(sortConfig === null || sortConfig.key !== sortKey) && (
          <div className=" flex flex-col">
            <Image src={sortUp} width={9} height={9} alt="edit" className="cursor-pointer max-w-[9px] max-h-[9px]" />
            <Image src={sortDown} width={9} height={9} alt="edit" className="cursor-pointer max-w-[9px] max-h-[9px]" />
          </div>
        )}
      </div>
    </TableHead>
  );
};
