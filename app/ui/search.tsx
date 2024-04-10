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
        className="peer block w-full rounded-md border border-outline-medium dark:border-outline-medium-dark dark:bg-surface-extra-light-dark py-[9px] pl-10 text-sm outline-2 placeholder:on-light"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-outline-medium dark:text-on-surface-dark" />
      <button
        className="text-white dark:text-primary-light-dark text-sm font-bold text-nowrap border-1 bg-primary-primary dark:bg-primary-primary-dark px-8 py-1 rounded-xl"
        type="button"
        onClick={authCtx.showCreateSport}
      >
        Create New
      </button>
    </form>
  );
}
