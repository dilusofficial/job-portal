import React from "react";
import NavigationLinks from "./NavigationLinks";

export default function Navigation() {
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0">
      <NavigationLinks />
    </div>
  );
}
