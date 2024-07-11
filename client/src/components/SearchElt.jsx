import React from "react";

export default function SearchElt({
  title,
  icon,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="form-row">
      <label className="form-label">{title}</label>
      <div className="flex items-center">
        <div className="text-2xl py-2 px-3 rounded-lg">{icon}</div>
        <input
          type="text"
          className="form-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
