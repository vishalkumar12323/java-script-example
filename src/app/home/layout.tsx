import { SideBar } from "@/components/side-bar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-2 overflow-hidden">
      <SideBar />
      <nav>navbar</nav>
      <main>{children}</main>
    </div>
  );
}
