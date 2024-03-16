import Search from "../ui/search";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  w-2/4 m-auto gap-4 text-primary text-2xl">
      <h1 className="text-on-surface">Sports</h1>
      <div>
        <Search placeholder="Search" />
      </div>
    </main>
  );
}
