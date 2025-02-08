import Navbar from "@/components/Navbar";
import { SideBar } from "@/components/side-bar";
import { SideBarTrigger } from "@/components/side-bar-trigger";
import { SideBarContextProvider } from "@/context/side-bar-trigger";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SideBarContextProvider>
      <SideBarTrigger>
        <SideBar />
        <Navbar />
        <div className="col-span-1 p-2 content overflow-y-auto [&::-webkit-scrollbar]:w-2">
          {children}
        </div>
      </SideBarTrigger>
    </SideBarContextProvider>
  );
}
