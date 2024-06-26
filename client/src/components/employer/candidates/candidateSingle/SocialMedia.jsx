import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";

export default function SocialMedia({ candidate }) {
  return (
    <div className="flex flex-col gap-5 my-5 w-full">
      <h1 className="text-xl">Social Media</h1>
      <div className="flex gap-6 items-center justify-start">
        <div className="text-ascent text-lg">
          <FaFacebookF />
        </div>
        <div className="text-ascent text-lg">
          <FaInstagram />
        </div>
        <div className="text-ascent text-lg">
          <FaTwitter />
        </div>
        <div className="text-ascent text-lg">
          <FaLinkedinIn />
        </div>
      </div>
      {candidate && (
        <>
          <h1 className="text-xl mt-5">Portfolio</h1>
          <div className="flex gap-6 items-center justify-start">
            <div className="text-ascent text-lg">
              <TbLetterP />
            </div>
            <p className="text-gray-500 text-md">example@gmail.com</p>
          </div>
        </>
      )}
    </div>
  );
}
