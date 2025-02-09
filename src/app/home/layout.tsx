import Navbar from "@/components/Navbar";
import { SideBar } from "@/components/side-bar";
import { SideBarTrigger } from "@/components/side-bar-trigger";
import { SideBarContextProvider } from "@/context/side-bar-trigger";

type TFileType = {
  id: string;
  filename: string;
};
type TApiResponseType = {
  id: string;
  item: string;
  files: TFileType[];
}[];

const fetchData = async (): Promise<TApiResponseType> => {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  return data.folders;
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const folders = await fetchData();
  return (
    <SideBarContextProvider>
      <SideBarTrigger>
        <SideBar folders={folders} />
        <Navbar />
        <div className="col-span-1 p-2 content overflow-y-auto [&::-webkit-scrollbar]:w-2">
          {children}
        </div>
      </SideBarTrigger>
    </SideBarContextProvider>
  );
}
