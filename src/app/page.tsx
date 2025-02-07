import Link from "next/link";
import ThemeButton from "@/components/Theme-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="min-h-screen p-4 font-[cursive] flex flex-col">
      <nav className="px-10 py-2 flex items-center justify-between rounded-md shadow">
        <Link href={"/"}>
          {" "}
          <p className="border w-12 h-12 rounded-full flex justify-center items-center font-semibold">
            JS
          </p>
        </Link>

        <ThemeButton />
      </nav>

      <div className="min-h-[60vh] flex items-center">
        <div className="w-fit mx-auto flex flex-col gap-8">
          <h1 className="text-5xl font-medium leading-[3.3rem] mt-4">
            Provides java-script all data-types, functions, <br /> and methods
            basic examples for <br /> java-script language learners
          </h1>

          <div className="w-full">
            <Button>
              {" "}
              <Link href={"/home"}>Get started</Link>{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto text-center">
        <p className="w-full">
          &copy; 2025 all right reserved,{" "}
          <Link href={"/"} className="text-blue-600">
            java-script-example
          </Link>
        </p>
      </div>
    </main>
  );
}
