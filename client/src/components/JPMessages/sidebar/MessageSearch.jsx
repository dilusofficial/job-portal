import React from "react";
import { IoSearch } from "react-icons/io5";

export default function MessageSearch() {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="text"
        placeholder="Search"
        className="p-2 bg-background2 rounded-xl"
      />
      <div className="text-2xl bg-hover text-primary hover:bg-ascent p-1 rounded-full">
        <IoSearch />
      </div>
    </div>
  );
}
