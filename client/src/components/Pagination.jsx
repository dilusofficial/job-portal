import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export default function Pagination() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary">
        <FiArrowLeftCircle />
      </div>
      <h1>Page 1 of 3</h1>
      <div className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary">
        <FiArrowRightCircle />
      </div>
    </div>
  );
}
