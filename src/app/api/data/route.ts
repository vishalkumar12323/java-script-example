import { type NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
export async function GET(req: NextRequest) {
  const folderPath = path.resolve("src/javascript");
  try {
    const files = await fs.readdir(folderPath, {
      encoding: "utf-8",
      recursive: false,
    });
    return new Response(JSON.stringify({ files }), { status: 200 });
  } catch (err) {
    console.log("err ");
    return new Response(JSON.stringify({ err }), { status: 504 });
  }
}
