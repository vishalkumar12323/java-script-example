"use client";
import React, { createContext, useContext, useState } from "react";

type SideBarTriggerContextType = {
  isOpened: true | false;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideBarTriggerContext = createContext<SideBarTriggerContextType | null>(
  null
);

export const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <SideBarTriggerContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SideBarTriggerContext.Provider>
  );
};

export const useSideBarTrigger = () => {
  const context = useContext(SideBarTriggerContext);
  if (!context) {
    throw new Error("please use inside SideBarContextProvider");
  }
  return { isOpened: context.isOpened, setIsOpened: context.setIsOpened };
};
