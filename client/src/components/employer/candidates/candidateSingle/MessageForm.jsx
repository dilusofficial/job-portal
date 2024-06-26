import React from "react";
import ProfileFormInputElt from "../../dashboard/ProfileFormInputElt";

export default function MessageForm() {
  return (
    <div className="flex flex-col gap-3 my-5 py-5 w-full">
      <h1 className="text-xl">Send a Message</h1>
      <div className="form-row">
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-secondary border border-gray-300 text-gray-900"
            placeholder={"Type your message...."}
            rows={7}
          />
        </div>
      </div>
      <button className="px-3 py-2 bg-ascent text-secondary hover:bg-hover rounded-lg w-full">
        Send Message
      </button>
    </div>
  );
}
