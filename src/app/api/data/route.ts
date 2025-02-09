import { type NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";
export async function GET(req: NextRequest) {
  const DIRECTORY_PATH = path.resolve("src/javascript");
  try {
    const folders = fs
      .readdirSync(DIRECTORY_PATH, {
        encoding: "utf-8",
        recursive: false,
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((folder) => {
        const folderPath = path.join(DIRECTORY_PATH, folder.name);
        const files = fs.readdirSync(folderPath).map((file) => {
          return {
            id: uuidv4(),
            filename: file,
          };
        });

        return {
          id: uuidv4(),
          item: folder.name,
          files,
        };
      });
    return new Response(JSON.stringify({ folders }), { status: 200 });
  } catch (err) {
    console.log("err ");
    return new Response(JSON.stringify({ err }), { status: 504 });
  }
}
