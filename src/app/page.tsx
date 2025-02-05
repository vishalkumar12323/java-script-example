import Image from "next/image";
import Link from "next/link";

import { ThemeButton } from "@/components/index";
export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <nav className="px-10 py-2 flex items-center justify-between rounded shadow">
        <Link href={"/"}>
          {" "}
          <Image
            src="/logo.png"
            alt="app-logo"
            width={40}
            height={40}
            loading="lazy"
          />
        </Link>

        <ThemeButton />
      </nav>
    </main>
  );
}
