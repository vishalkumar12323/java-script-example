import { type NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET(req: NextRequest) {
  try {
    const foldername = req.headers.get("folder-name");
    const filename = req.headers.get("file-name");

    if (!foldername || !filename) {
      return new NextResponse(
        JSON.stringify({ error: "Missing folder-name or file-name header" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (foldername?.includes("..") || filename?.includes("..")) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid folder or file name" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const filePath = path.resolve(`src/javascript/${foldername}/${filename}`);

    const data = await fs.readFile(filePath, "utf-8");
    return new NextResponse(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error reading file:", err);
    return new NextResponse(
      JSON.stringify({ error: "Failed to read file", details: err }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
