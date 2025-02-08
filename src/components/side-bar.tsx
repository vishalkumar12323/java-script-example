import React from "react";

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
  return (
    <aside
      className="py-4 px-2 w-56 max-h-screen flex flex-col gap-4 overflow-y-auto 
    [&::-webkit-scrollbar]:w-0
    ">
      <div className="flex flex-col gap-4">
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
        <span>hello world</span>
      </div>
    </aside>
  );
};
