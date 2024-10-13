import React, { useState } from "react";
import ProfileSideBarButton from "./profileSideBarButton";
import ProfileSideBarDropdown from "./profileSideBarDropDown";
import { FaUserCircle } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import {
  MdEditNote,
  MdArticle,
  MdManageAccounts,
  MdLogout,
  MdManageSearch,
} from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";

export default function ProfileSideBarContainer({ active, setActive }) {
  const [isCmsOpen, setIsCmsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="flex flex-col px-1 w-max">
      <ProfileSideBarButton
        index={0}
        active={active}
        setActive={setActive}
        icon={<FaUserCircle />}
        label="My Profile"
      />
      <ProfileSideBarButton
        index={1}
        active={active}
        setActive={setActive}
        icon={<CgNotes />}
        label="Article Management"
      />
      <ProfileSideBarButton
        index={2}
        active={active}
        setActive={setActive}
        icon={<MdEditNote />}
        label="Course Management"
      />
      <ProfileSideBarDropdown
        label="CMS Properties"
        icon={<MdManageSearch />}
        isOpen={isCmsOpen}
        setIsOpen={setIsCmsOpen}
        items={[
          { label: "Section", icon: <TbNewSection />, index: 3 },
          { label: "Article Type", icon: <MdArticle />, index: 4 },
          { label: "Course Type", icon: <SiCoursera />, index: 5 },
        ]}
        active={active}
        setActive={setActive}
      />
      <ProfileSideBarButton
        index={6}
        active={active}
        setActive={setActive}
        icon={<GoWorkflow />}
        label="Workflow"
      />
      <ProfileSideBarDropdown
        label="Admin Settings"
        icon={<MdManageAccounts />}
        isOpen={isAdminOpen}
        setIsOpen={setIsAdminOpen}
        items={[] /* Add admin items here */}
        active={active}
        setActive={setActive}
      />
      <ProfileSideBarButton
        index={7}
        active={active}
        setActive={setActive}
        icon={<MdLogout />}
        label="Logout"
      />
    </div>
  );
}
