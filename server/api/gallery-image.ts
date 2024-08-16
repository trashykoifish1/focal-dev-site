import fs from "fs";
import path from "path";

export default defineEventHandler((event) => {
  const directoryPath = path.join(process.cwd(), "public", "pictures");

  try {
    const files = fs.readdirSync(directoryPath);
    const imageFiles = files.filter((file) =>
      [".jpg", ".jpeg", ".png", ".gif"].includes(
        path.extname(file).toLowerCase()
      )
    );
    return imageFiles.map((file) => `/pictures/${file}`);
  } catch (err) {
    console.error("Unable to scan directory: " + err);
    return [];
  }
});
