import React from "react";
import LogoUpload from "./LogoUpload";
import ProfileFormInputElt from "../ProfileFormInputElt";
import ProfileInputSelectElt from "../ProfileInputSelectElt";

export default function ProfileForm() {
  return (
    <div className="my-4">
      <LogoUpload />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <ProfileFormInputElt
          title={"Company name"}
          type={"text"}
          placeholder={"Enter company name"}
        />
        <ProfileFormInputElt
          title={"Company Email"}
          type={"email"}
          placeholder={"email@email.com"}
        />
        <ProfileFormInputElt
          title={"Company contact"}
          type={"text"}
          placeholder={"+91xxxxxxxxx"}
        />
        <ProfileFormInputElt title={"Founded on"} type={"date"} />
        <ProfileInputSelectElt
          title={"Company Size"}
          list={["10-50", "50-100", "100-200", "200-400", "400-800", ">800"]}
        />
        <ProfileInputSelectElt
          title={"Industry Type"}
          list={[
            "Information Technology & Telecommunications",
            "Finance & Insurance",
            "Healthcare & Pharmaceuticals",
            "Education & Training",
            "Engineering & Manufacturing",
            "Construction & Real Estate",
            "Retail, Wholesale & E-commerce",
            "Hospitality, Travel & Tourism",
            "Media, Entertainment & Arts",
            "Government, Non-Profit & Public Services",
          ]}
        />
        <ProfileFormInputElt
          title={"Company Website"}
          type={"text"}
          placeholder={"www.company.com"}
        />
        <ProfileFormInputElt
          title={"Facebook"}
          type={"text"}
          placeholder={"facebook url"}
        />
        <ProfileFormInputElt
          title={"Twitter"}
          type={"text"}
          placeholder={"twitter url"}
        />
        <ProfileFormInputElt
          title={"Linkedin"}
          type={"text"}
          placeholder={"linkedin url"}
        />
        <ProfileFormInputElt
          title={"Country"}
          type={"text"}
          placeholder={"INDIA"}
        />
        <ProfileFormInputElt
          title={"STATE"}
          type={"text"}
          placeholder={"KERALA"}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Address</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"address"}
            rows={4}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">About</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"about"}
            rows={6}
          />
        </div>
      </div>
      <button className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover">
        Save
      </button>
    </div>
  );
}
