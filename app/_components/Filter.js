"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-end mb-5">
      <ul className="border border-primary-800 flex">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All cabins
        </Button>
        <Button
          filter="small"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          2&mdash;3 guests
        </Button>
        <Button
          filter="medium"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          4&mdash;7 guests
        </Button>
        <Button
          filter="large"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          8&mdash;12 guests
        </Button>
      </ul>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <li
      className={`px-6 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      <button onClick={() => handleFilter(filter)}>{children}</button>
    </li>
  );
}

export default Filter;
