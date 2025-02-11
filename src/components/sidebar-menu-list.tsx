"use client";
import React from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type TListCollapsable = {
  [key: string]: boolean;
};
type TFileType = {
  id: string;
  filename: string;
};
type TApiResponseType = {
  id: string;
  item: string;
  files: TFileType[];
};
export const SidebarMenuList = ({
  listItems,
}: {
  listItems: TApiResponseType;
}) => {
  const [collapsed, setCollapsed] = useState<TListCollapsable>({});

  return (
    <li>
      <div
        className="flex justify-between items-center px-2 py-1 rounded-md shadow-md bg-[#ecececf2] dark:bg-[#0e0e0ef2] hover:bg-accent hover:text-accent-foreground cursor-pointer select-none"
        onClick={() =>
          setCollapsed((preState) => ({
            ...preState,
            [listItems.id]: !preState[listItems.id],
          }))
        }>
        <span className="capitalize text-[17px]">{listItems.item}</span>
        <Button
          variant={"none"}
          className={`${
            collapsed[listItems.id]
              ? "rotate-90 transition-transform"
              : "rotate-0 transition-transform"
          }`}>
          <ChevronRight />
        </Button>
      </div>

      <ul
        className={`flex gap-1 flex-col pt-1 ${
          collapsed[listItems.id] ? " block transition" : "hidden transition"
        }`}>
        {listItems.files.map((sub) => (
          <li
            key={sub.id}
            className="font-normal text-[14px] hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md select-none cursor-pointer">
            <Link
              href={`/home/content/${listItems.item.toLowerCase()}/${sub.filename.toLowerCase()}`}>
              {sub.filename.split(".")[0]}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
