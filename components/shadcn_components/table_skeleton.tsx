import { Skeleton } from "@/components/ui/skeleton";

export const TableSkeleton = () => {
  return (
    <>
      <div className="bg-white p-10 rounded-[10px]">
        <div className="mb-2 flex space-x-1">
          <Skeleton className="h-4 w-16 mb-4" />
        </div>
        <div className="flex space-x-1flex items-center gap-x-3 mb-4">
          <Skeleton className="h-[51px] w-1/3" />
          <Skeleton className="h-[51px] w-1/3" />
          <Skeleton className="h-[51px] w-1/3" />
        </div>
        <div className="flex justify-end space-x-7 items-center">
          <div className="space-x-1">
            <Skeleton className="h-[51px] w-[120px]" />
          </div>
        </div>
      </div>

      <div className="flex space-x-1 justify-end my-4">
        <Skeleton className="h-[45px] w-[140px]" />
        <Skeleton className="h-[45px] w-[140px]" />
      </div>

      <div className="bg-white p-4">
        <div className="mt-8">
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-8 w-full mb-4" />
        </div>
      </div>
    </>
  );
};
export default TableSkeleton;
