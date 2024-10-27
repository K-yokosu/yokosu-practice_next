import List from "./_content/list";

export default function Page() {
  return (
    <div className="mb-8">
      <h2 className="text-xl mt-4">Route Cache</h2>
      <div className="my-8">
        <h2 className="font-bold text-lg">役割</h2>
        <p className="text-sm"></p>
        <h2 className="font-bold text-lg mt-2">用途</h2>
        <p className="text-sm"></p>
      </div>

      <List />
    </div>
  );
}
