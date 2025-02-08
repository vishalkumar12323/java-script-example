"use client";
import { useSideBarTrigger } from "@/context/side-bar-trigger";
import { PanelLeft } from "lucide-react";

export const TriggerButton = () => {
  const { setIsOpened } = useSideBarTrigger();

  return (
    <button className="text-3xl" onClick={() => setIsOpened((state) => !state)}>
      <PanelLeft />
    </button>
  );
};
