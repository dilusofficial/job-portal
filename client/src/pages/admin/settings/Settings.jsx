import React from "react";
import SettingOption from "../../../components/settings/SettingOption";

export default function Settings() {
  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold">Settings</h1>
      <SettingOption name={"Payment Settings"} />
      <SettingOption name={"Announcement Settings"} />
      <SettingOption name={"Advertisement Settings"} />
      <SettingOption name={"Plan Settings"} />
    </div>
  );
}
