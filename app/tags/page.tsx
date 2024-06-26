import Search from "../ui/search";
import Modal from "../ui/tags/modal";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen  w-[926px] m-auto gap-4 text-primary text-2xl">
      <h1 className=" font-semibold">Sports</h1>
      <div>
        <Search placeholder="Search" />
      </div>
      <div className="flex flex-wrap justify-between gap-y-5">
        <Modal />
      </div>
    </main>
  );
}
