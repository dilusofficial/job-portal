import React from "react";
import ProgressComponent from "../../components/dataCollection/ProgressComponent";
import BasicDetails from "../../components/dataCollection/BasicDetails";
import { useSelector } from "react-redux";
import EducationDetail from "../../components/dataCollection/EducationDetail";
import WorkDetails from "../../components/dataCollection/WorkDetails";
import ProfessionalDetails from "../../components/dataCollection/ProfessionalDetails";
import Preferences from "../../components/dataCollection/Preferences";

export default function DataCollection() {
  const {
    basicColor,
    educationColor,
    workColor,
    professionalColor,
    preferencesColor,
    basicDetails,
    educationDetails,
    workDetails,
    professionalDetails,
    preferences,
  } = useSelector((state) => state.dataCollection);
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-2">
        <ProgressComponent title={"Basic Details"} colorCode={basicColor} />
        <ProgressComponent
          title={"Education Details"}
          colorCode={educationColor}
        />
        <ProgressComponent title={"Work Experience"} colorCode={workColor} />
        <ProgressComponent
          title={"Professional Details"}
          colorCode={professionalColor}
        />
        <ProgressComponent title={"Preferences"} colorCode={preferencesColor} />
      </div>
      <div className="flex justify-center">
        {basicDetails === "current" && <BasicDetails />}
        {educationDetails === "current" && <EducationDetail />}
        {workDetails === "current" && <WorkDetails />}
        {professionalDetails === "current" && <ProfessionalDetails />}
        {preferences === "current" && <Preferences />}
      </div>
    </div>
  );
}
