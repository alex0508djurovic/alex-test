"use client";
import React from "react";
import SidebarButton from "./SidebarButton";
import sidebarList from "@/constants/sidebarList";

const Sidebar = () => {
  return (
    <>
      <div className="w-full border-black rounded-3xl p-5 md:w-[30%]">
        {sidebarList.map(({ display, linkTo, enabled }, index) => (
          <SidebarButton
            display={display}
            linkTo={linkTo}
            enabled={!!enabled}
            key={`${linkTo}${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
