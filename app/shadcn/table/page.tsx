import { TableComponent } from "@/components/shadcn_components/table"

export default function Page() {
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl mt-4">Table</h2>
        <TableComponent />
        <p className="text-sm mt-5">tableは共通化に向いてない。このままで良い</p>
      </div>
    </>
  )
}
