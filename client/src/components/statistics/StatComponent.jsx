import React from "react";

export default function StatComponent({ count, text }) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mb-3">
      <div className="px-4 py-6 bg-ascent rounded-full text-primary text-2xl font-bold">
        {count}
      </div>
      <h1 className="text-2xl font-semibold">{text}</h1>
    </div>
  );
}
