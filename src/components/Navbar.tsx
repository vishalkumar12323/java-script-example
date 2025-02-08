import React from "react";
import { TriggerButton } from "@/components/ui/sidebar-trigger-button";
import ThemeButton from "@/components/Theme-button";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 navbar row-span-1 flex justify-between px-3 items-center border-b shadow-md">
      <>
        <TriggerButton />
      </>

      <div className="flex gap-2">
        <Button>Login</Button>
        <Button variant={"outline"}>Signup</Button>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
