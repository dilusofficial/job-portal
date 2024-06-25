import React from "react";

export default function ProfileFormInputElt({ title, placeholder, type }) {
  return (
    <div className="form-row">
      <label className="form-label">{title}</label>
      <div className="flex items-center">
        <input
          type={type}
          className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900 h-11"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
