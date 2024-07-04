import React, { useState } from "react";
import ListHeader from "../../../components/jobseeker/dashboard/profile/ListHeader";
import JSBasicDetails from "../../../components/jobseeker/dashboard/profile/JSBasicDetails";
import EducationDetail from "../../../components/dataCollection/EducationDetail";
import WorkDetails from "../../../components/dataCollection/WorkDetails";
import ProfessionalDetails from "../../../components/dataCollection/ProfessionalDetails";
import JSPreferences from "../../../components/jobseeker/dashboard/profile/JSPreferences";

export default function JSMyProfile() {
  const [showBasic, setShowBasic] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showPre, setShowPre] = useState(false);
  return (
    <div>
      <h1 className="text-xl my-3">My Profile</h1>
      <div className="flex flex-col gap-5">
        <div onClick={() => setShowBasic(!showBasic)}>
          <ListHeader name={"Basic Details"} />
        </div>
        {showBasic && <JSBasicDetails />}
        <div onClick={() => setShowEdu(!showEdu)}>
          <ListHeader name={"Education Details"} />
        </div>
        {showEdu && <EducationDetail inside />}
        <div onClick={() => setShowWork(!showWork)}>
          <ListHeader name={"Work Details"} />
        </div>
        {showWork && <WorkDetails inside />}
        <div onClick={() => setShowPro(!showPro)}>
          <ListHeader name={"Professional Details"} />
        </div>
        {showPro && <ProfessionalDetails inside />}
        <div onClick={() => setShowPre(!showPre)}>
          <ListHeader name={"Preferences"} />
        </div>
        {showPre && <JSPreferences />}
      </div>
    </div>
  );
}
