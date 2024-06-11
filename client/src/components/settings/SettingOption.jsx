import React from "react";

export default function SettingOption({ name, link }) {
  return (
    <div className="flex justify-between items-center bg-secondary rounded-md p-2 m-2">
      <p className="text-lg font-semibold">{name}</p>

      <div className="flex justify-center items-center gap-2">
        <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover">
          Configure
        </button>
      </div>
    </div>
  );
}
