"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>   {/* EĞER BURAYA {e => handleSearch yazarsak bize yukarıdaki e: FormEvent<HTMLFormElement> ifadesini gösterir} */}
      <input
        type="text"
        value={search}
        placeholder="enter search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        {" "}
        Search Button
      </button>
    </form>
  );
}
export default Search;
