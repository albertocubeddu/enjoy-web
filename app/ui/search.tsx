"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

// import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  const authCtx = useContext(AuthContext);

  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  // const handleSearch = useDebouncedCallback((term: string) => {
  //   console.log(`Searching... ${term}`);

  //   const params = new URLSearchParams(searchParams);
  //   params.set("page", "1");

  //   if (term) {
  //     params.set("query", term);
  //   } else {
  //     params.delete("query");
  //   }
  // }, 300);

  return (
    <form className="relative flex flex-1 flex-shrink-0 gap-x-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button
        className="text-white text-sm text-nowrap border-1 bg-primary-primary px-8 py-1 rounded-xl"
        type="button"
        onClick={authCtx.showCreateSport}
      >
        Create New
      </button>
    </form>
  );
}
