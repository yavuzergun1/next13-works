import React from "react";
import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ml-8">
      <div className="-1">{children} </div>
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
    </main>
  );
}
