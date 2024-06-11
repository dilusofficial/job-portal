import React from "react";

export default function ExtraDetails({ user }) {
  return (
    <section className="bg-secondary p-3 rounded-lg mt-3">
      <h4 className="form-title mb-3 text-lg font-semibold">
        {"Other Details"}
      </h4>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Education</p>
        <p>:</p>
        <p>{user?.education || "BTECH"}</p>
      </div>
      <div className="flex gap-3 justify-start items-start my-3">
        <p>Skills</p>
        <p>:</p>
        <p>
          {user?.skills || (
            <ul>
              <li className="pb-2">React</li>
              <li className="pb-2">Node</li>
              <li className="pb-2">MongoDB</li>
            </ul>
          )}
        </p>
      </div>
      <div className="flex gap-3 justify-start items-start my-3">
        <p>Languages</p>
        <p>:</p>
        <p>
          {user?.languages || (
            <ul>
              <li className="pb-2">English</li>
              <li className="pb-2">Malayalam</li>
              <li className="pb-2">Hindi</li>
            </ul>
          )}
        </p>
      </div>
      <div className="flex gap-3 justify-start items-start my-3">
        <p>Experience</p>
        <p>:</p>
        <p>
          {user?.experience || (
            <ul>
              <li className="pb-2">Web Developer - 2yrs</li>
              <li className="pb-2">Intern- 6 months</li>
            </ul>
          )}
        </p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Current CTC</p>
        <p>:</p>
        <p>{user?.currentCTC || "5 LPA"}</p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Expected CTC</p>
        <p>:</p>
        <p>{user?.expectedCTC || "6 LPA"}</p>
      </div>
    </section>
  );
}
