import React from "react";
import { TriggerButton } from "@/components/ui/sidebar-trigger-button";
import ThemeButton from "@/components/Theme-button";

const Navbar = () => {
  return (
    <div className="navbar row-span-1 flex justify-between px-3 items-center">
      <div>
        <TriggerButton />
      </div>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
