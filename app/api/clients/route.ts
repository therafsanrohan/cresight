import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  try {
    const clientsDir = path.join(process.cwd(), "public", "clients");
    
    // Check if the directory exists
    if (!fs.existsSync(clientsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(clientsDir);
    
    // Filter for images: svg, png, jpg, jpeg, webp
    const imageExtensions = [".svg", ".png", ".jpg", ".jpeg", ".webp"];
    const clientFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const clients = clientFiles.map((file) => {
      // Create a nice human-readable name from filename
      let name = path.basename(file, path.extname(file));
      
      // Clean up common suffixes/separators
      name = name.replace(/[-_]logo/i, "");
      name = name.replace(/[-_]/g, " ");
      
      // Handle well-known Bangladeshi brand formatting specifically
      const lowerName = name.toLowerCase();
      if (lowerName === "bkash") {
        name = "bKash";
      } else if (lowerName === "aci") {
        name = "ACI";
      } else if (lowerName === "walton") {
        name = "Walton";
      } else if (lowerName === "pran") {
        name = "PRAN";
      } else {
        // Capitalize words
        name = name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      return {
        name,
        logo: `/clients/${file}`,
      };
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error("Error loading client logos:", error);
    return NextResponse.json([], { status: 500 });
  }
}
