"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { SortAbleTableRow } from "@/components/dnd/sortable_table_row";

type ItemType = {
    id: number;
    name: string;
    isEntry: boolean;
};

const INIT_ITEM_LIST: ItemType[] = [
    { id: 1, name: "c", isEntry: true },
    { id: 2, name: "a", isEntry: false },
    { id: 3, name: "b", isEntry: false },
    { id: 4, name: "e", isEntry: true },
    { id: 5, name: "d", isEntry: true }
];

const initInsert: ItemType = { id: 1, name: "", isEntry: false };

export default function Page() {
    const [clickRow, setClickRow] = useState<number | null>(null);
    const [items, setItems] = useState<ItemType[]>(INIT_ITEM_LIST);

    const [insertItem, setInsertItem] = useState<ItemType>(initInsert);

    // D&D後の処理
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        // DDキャンセル or 元の場所にドロップ
        if (!over || active.id === over.id) {
            // clickRow操作
            setClickRow(clickRow !== active.id ? Number(active.id) : null);
            return;
        } else {
            setClickRow(null);
        }

        const oldSortable = active.data.current?.sortable;
        const newSortable = over.data.current?.sortable;
        if (!oldSortable || !newSortable) return;
        const dataAfterDnd = arrayMove(items, oldSortable.index, newSortable.index);
        const values = dataAfterDnd.map((item, index) => {
            return {
                ...item,
                id: index + 1
            };
        });
        setItems(values);
    }

    const addItem = () => {
        setItems(prev => [...prev, { ...insertItem, id: items.length + 1 }]);
        setInsertItem(initInsert);
    };

    const deleteItem = () => {
        setItems(prev => prev.filter(item => item.id !== clickRow));
        setClickRow(null);
    };

    return (
        <>
            <div className="mb-8">
                <h2 className="text-xl mt-4">Drag & Drop</h2>

                <DndContext onDragEnd={handleDragEnd} id={"sampleItems"}>
                    <div className="flex">
                        <div className="w-1/3">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-9">id</TableHead>
                                        <TableHead className="w-32">name</TableHead>
                                        <TableHead className="w-20 text-center">出欠</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <SortableContext items={items} key={"sampleItems"} id={"sampleItems"}>
                                        {items.map((row, index) => {
                                            return (
                                                <SortAbleTableRow
                                                    key={row.id}
                                                    id={row.id}
                                                    css={`
                                                        ${index % 2 === 0 ? "" : "bg-gray-100"} cursor-pointer ${clickRow === row.id ? "bg-blue-200" : "hover:bg-[#eaf4f5]"}
                                                    `}
                                                >
                                                    <TableCell className="h-12 min-h-12">{row.id}</TableCell>
                                                    <TableCell className="h-12 min-h-12">{row.name}</TableCell>
                                                    <TableCell className="h-12 min-h-12 text-center">
                                                        <Checkbox checked={row.isEntry} />
                                                    </TableCell>
                                                </SortAbleTableRow>
                                            );
                                        })}
                                    </SortableContext>
                                </TableBody>
                            </Table>
                        </div>
                        <div className="w-1/3 ml-10">
                            <div className="mb-4">
                                <div className="text-sm mb-2">name</div>
                                <div className="mb-4">
                                    <Input
                                        value={insertItem.name}
                                        onChange={e => {
                                            setInsertItem(prev => ({ ...prev, name: e.target.value }));
                                        }}
                                    />
                                </div>
                                <div className="text-sm mb-2">isEntry</div>
                                <div className="mb-4 flex items-center">
                                    <Checkbox checked={insertItem.isEntry} onClick={() => setInsertItem(prev => ({ ...prev, isEntry: !prev.isEntry }))} />
                                </div>
                                <div className="mb-4 flex flex-wrap items-center gap-1">
                                    <Button onClick={addItem} className="h-10">
                                        追加
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DndContext>
            </div>
        </>
    );
}
