import React from "react";
import ProfileWorkflow from "./profileWorkflow/workflow";
import CMSCourseType from "./cmsProperties/cmsCourseType";
import ProfileMyProfile from "./profileMyProfile/profileMyProfile";
import AmArticleRender from "./articleManagement/amArticleRender";
import CMSArticleType from "./cmsProperties/cmsArticleType";
import CmCourseRender from "./courseManagement/cmCourseRender";
import CMSSections from "./cmsProperties/cmsSections";

export default function ProfileContent({ active }) {
  const renderContent = () => {
    switch (active) {
      case 0:
        return <ProfileMyProfile />;
      case 1:
        return <AmArticleRender />;
      case 2:
        return <CmCourseRender />;
      case 3:
        return <CMSSections />;
      case 4:
        return <CMSArticleType />;
      case 5:
        return <CMSCourseType />;
      case 6:
        return <ProfileWorkflow />;
      // case 7:
      //   return <div>Admin Settings</div>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="text-xl text-gray-800 w-full min-h-screen p-6">
      {renderContent()}
    </div>
  );
}
