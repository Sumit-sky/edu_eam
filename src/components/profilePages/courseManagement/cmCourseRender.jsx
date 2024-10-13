import React from "react";
import CmExistingCourses from "./cmExistingCourses";
import CmNewCourse from "./cmNewCourse";
import ExistingAndNewSwitch from "../common/existingAndNewSwitch";

export default function CmCourseRender() {
  return (
    <ExistingAndNewSwitch
      page={"Courses"}
      existingComponent={<CmExistingCourses />}
      newComponent={<CmNewCourse />}
    />
  );
}