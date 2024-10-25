"use client";

import TableSkeleton from "@/components/shadcn_components/table_skeleton";

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Skelton</h2>

        <TableSkeleton />
        <p className="mt-5">共通化不要。props渡してもローディングでは使えないから、ベタガキになるかな。仕上がったUIのテキストや画像をスケルトンに置き換えると良い</p>
      </div>
    </>
  )
}
