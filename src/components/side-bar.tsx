"use client";
import { useSideBarTrigger } from "@/context/side-bar-trigger";

const data = [
  {
    id: "1",
    name: "array",
    examples: ["app.js", "index.js"],
  },
  {
    id: "2",
    name: "object",
    examples: ["object.js", "class.js"],
  },
];
export const SideBar = () => {
  const { isOpened } = useSideBarTrigger();
  return (
    <aside
      className={`row-span-2 h-screen border-r shadow-md ${
        isOpened && "opacity-0"
      }`}>
      <header
        aria-label="side-bar-header"
        className="h-14 flex justify-center items-center gap-1 py-2">
        <p className="border-2 w-10 h-10 rounded-full flex justify-center items-center font-semibold">
          JS
        </p>
        <span className="text-[1.2rem] capitalize font-[cursive] font-semibold">
          example
        </span>
      </header>
    </aside>
  );
};
