import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const picturesDir = path.join(__dirname, "..", "public", "pictures");
const outputFile = path.join(__dirname, "..", "utils", "galleryImages.js");

async function generateGalleryImages() {
  try {
    // Read the pictures directory
    const files = await fs.readdir(picturesDir);

    // Filter for image files
    const imageFiles = files.filter((file) =>
      [".jpg", ".jpeg", ".png", ".gif"].includes(
        path.extname(file).toLowerCase()
      )
    );

    // Generate the content for galleryImages.js
    const fileContent = `export const galleryImages = ${JSON.stringify(
      imageFiles,
      null,
      2
    )};`;

    // Write the file
    await fs.writeFile(outputFile, fileContent);
    console.log("Successfully generated galleryImages.js");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

generateGalleryImages();
