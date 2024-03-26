import Search from "../ui/search";
import Sports from "../ui/sports/sports";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen  w-[926px] m-auto gap-4 text-primary text-2xl">
      <h1 className="text-on-surface font-semibold">Sports</h1>
      <div>
        <Search placeholder="Search" />
      </div>
      <div className="flex justify-between">
        <Sports />
      </div>
    </main>
  );
}
