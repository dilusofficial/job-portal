import React from "react";
import NotificationElt from "./NotificationElt";
import { candidatesList } from "../../../../utils/candidateListingdata";

export default function NotificationContainer() {
  return (
    <div className="bg-background2 p-3 rounded-lg my-4">
      <h1 className="text-xl my-3">Recent Notifications</h1>
      <div className="flex flex-col gap-3">
        {candidatesList.slice(0, 6).map((item) => (
          <NotificationElt
            key={item.id}
            name={item.fullname}
            post={item.jobrole}
          />
        ))}
      </div>
    </div>
  );
}
