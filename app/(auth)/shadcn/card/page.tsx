"use client";

// library
import React from "react";
// component
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
    return (
        <div className="">
            <div className="my-8">
                <h2 className="font-bold text-lg">役割</h2>
                <p className="text-sm">カード</p>
                <h2 className="font-bold text-lg mt-2">用途</h2>
                <p className="text-sm">なんでも使える。確認画面とかモーダルのコンテンツとか</p>
            </div>
            <Table className="table-auto w-full border-2 border-gray-300">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead className="w-1/5">- / 関連自作component</TableHead>
                        <TableHead className="w-2/5">Props</TableHead>
                        <TableHead className="w-2/5">例</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="">
                        <TableCell className="">-</TableCell>
                        <TableCell className="">-</TableCell>
                        <TableCell className="">
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" placeholder="Name of your project" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="framework">Framework</Label>
                                                <Select>
                                                    <SelectTrigger id="framework">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent position="popper">
                                                        <SelectItem value="next">Next.js</SelectItem>
                                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                                        <SelectItem value="astro">Astro</SelectItem>
                                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Deploy</Button>
                                </CardFooter>
                            </Card>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
