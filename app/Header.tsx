import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className=" p-5 bg-blue-500 text-white font-semibold text-lg">
      <div className="links-container w-6/12 flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/search">Google Search</Link>
        <Link href="/todos">Todos App</Link>
        <Link href="/todos">Admin</Link>
      </div>
    </header>
  );
}

export default Header;
