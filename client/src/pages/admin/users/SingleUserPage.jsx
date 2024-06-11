import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userData } from "../../../utils/data";
import BasicDetails from "../../../components/users/BasicDetails";
import ExtraDetails from "../../../components/users/ExtraDetails";
import UserApplies from "../../../components/users/UserApplies";
import { JobDetailsData } from "../../../utils/data2";

export default function SingleUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const newId = parseInt(id);
    setUser(userData.find((item) => item.id === newId));
  }, [id]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-2xl font-semibold">{user?.name}</h1>
        <div className="flex gap-1">
          <Link
            to={"/admin/users"}
            className="bg-ascent text-primary p-2 rounded-md hover:bg-hover"
          >
            BACK
          </Link>
          <button className="bg-ascent text-primary p-2 rounded-md hover:bg-hover">
            DISABLE
          </button>
          <button className="bg-red-500 text-primary p-2 rounded-md hover:bg-red-400">
            DELETE
          </button>
        </div>
      </div>
      <BasicDetails user={user} />
      <ExtraDetails user={user} />
      <UserApplies data={JobDetailsData} />
    </div>
  );
}
