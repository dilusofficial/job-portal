import React from "react";

export default function CategoryCard({ icon, category, open }) {
  return (
    <div className="categorycard nav-link">
      <div className="text-4xl">{icon}</div>
      <h1 className="text-2xl">{category}</h1>
      <p className=" opacity-40">{`(${open} open positions)`}</p>
    </div>
  );
}
