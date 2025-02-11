"use client";
import { useSideBarTrigger } from "@/context/side-bar-trigger";
import { SidebarMenuList } from "./sidebar-menu-list";


type TFileType = {
  id: string;
  filename: string;
};
type TApiResponseType = {
  id: string;
  item: string;
  files: TFileType[];
}[];
export const SideBar = ({ folders }: { folders: TApiResponseType }) => {
  const { isOpened } = useSideBarTrigger();
  return (
    <aside
      className={`row-span-2 h-screen border-r shadow-md ${
        isOpened && "opacity-0"
      }`}>
      <div
        aria-label="side-bar-header"
        className="h-14 flex justify-start items-center gap-1 py-2 px-2 border-b">
        <p className="border-2 w-10 h-10 rounded-full flex justify-center items-center font-semibold">
          JS
        </p>
        <span className="text-[1.2rem] capitalize font-[cursive] font-semibold">
          example
        </span>
      </div>

      <ul
        className={`content overflow-y-auto [&::-webkit-scrollbar]:w-0 p-2 flex flex-col gap-2 ${
          isOpened && "opacity-0"
        }`}>
        {folders &&
          folders.map((d) => {
            return <SidebarMenuList key={d.id} listItems={d} />;
          })}
      </ul>
    </aside>
  );
};
