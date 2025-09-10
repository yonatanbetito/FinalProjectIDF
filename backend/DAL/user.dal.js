import fs from "node:fs"
import dotenv from "dotenv";
dotenv.config();
const Path = process.env.PATH_FILE_U;

export async function getAllUsersDB() {
  try {
    const data = fs.readFileSync(Path, "utf-8");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.log("error:", err.message);
    return [];
  }
}