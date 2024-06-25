import React from "react";
import { BsUpload } from "react-icons/bs";

export default function LogoUpload() {
  return (
    <div className=" flex justify-start items-center gap-3 my-4">
      <label className=" flex flex-col p-4 gap-2 items-center border border-dashed border-gray-400 hover:border-gray-700 rounded-lg cursor-pointer">
        <input type="file" className="hidden" />
        <div className="text-xl">
          <BsUpload />
        </div>
        <p>Upload</p>
      </label>
      <div>
        <p className="text-gray-400 text-sm">
          Upload the logo of your company. preffered dimension 330px x 330px
        </p>
      </div>
    </div>
  );
}
