"use client";
import { useSideBarTrigger } from "@/context/side-bar-trigger";

import React from "react";

export const SideBarTrigger = ({ children }: { children: React.ReactNode }) => {
  const { isOpened } = useSideBarTrigger();
  return (
    <>
      <div
        className={`grid min-h-screen grid-rows2 ${
          isOpened ? "collapsed" : "grid-cols2"
        } side-bar-transition`}>
        {children}
      </div>
    </>
  );
};
