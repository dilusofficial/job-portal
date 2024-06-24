import React from "react";

export default function SearchSelectElt({ title, list, icon }) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {title}
      </label>
      <div className="flex items-center">
        <div className="text-2xl py-2 px-3 rounded-lg">{icon}</div>

        <select id="status" className="form-select">
          <option value={""}>{"ALL"}</option>
          {list?.map((item) => (
            <option key={item?.category} value={item?.category}>
              {item?.category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
