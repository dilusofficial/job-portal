import React from "react";
import ProfessionalDetailListing from "./ProfessionalDetailListing";

export default function CandidateDetails() {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">Description</h1>
        <p className="text-gray-500 leading-9">
          Hello my name is Nicole Wells and web developer from Portland. In
          pharetra orci dignissim, blandit mi semper, ultricies diam.
          Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id
          orci laoreet tempor non consequat enim. Sed vitae aliquam velit.
          Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer
          vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et
          pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum
          aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
          erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
          molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor
          luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec
          erat ut libero vulputate pulvinar.
        </p>
        <h1 className="my-4 text-xl">Education</h1>
        <ProfessionalDetailListing
          education
          heading={"Bachelor of Fine Arts"}
          subheading={"Mordern College"}
          year={"2012-2014"}
        />
        <ProfessionalDetailListing
          education
          heading={"computer Science"}
          subheading={"Haward university"}
          year={"2010-2012"}
        />
        <h1 className="my-4 text-xl">Work Experience</h1>
        <ProfessionalDetailListing
          work
          heading={"Product Designer"}
          subheading={"Spotify Inc."}
          year={"2016-2020"}
        />
        <ProfessionalDetailListing
          work
          heading={"UX Designer"}
          subheading={"Dropbox Inc."}
          year={"2014-2016"}
        />
        <h1 className="my-4 text-xl">Certificates</h1>
        <ProfessionalDetailListing
          certificates
          heading={"Perfect Attendance Programs"}
          subheading={"Software Algorithm"}
          year={"2016-2020"}
        />
        <ProfessionalDetailListing
          certificates
          heading={"Top Performer Recognition"}
          subheading={"Web Application"}
          year={"2014-2016"}
        />
      </div>
      <div className="bg-background1 h-screen w-full lg:w-1/4 rounded-lg"></div>
    </div>
  );
}
