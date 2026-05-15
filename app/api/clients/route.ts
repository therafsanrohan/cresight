import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const clientsDir = path.join(process.cwd(), 'public/clients');
    
    // Check if directory exists
    if (!fs.existsSync(clientsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(clientsDir);
    
    // Filter for image files and map to the expected object format
    const clients = files
      .filter(file => /\.(svg|png|jpg|jpeg|webp)$/i.test(file))
      .map(file => {
        // Clean name: remove extension and replace hyphens/underscores with spaces
        const name = file
          .split('.')[0]
          .replace(/[_-]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
          
        return {
          name,
          logo: `/clients/${file}`
        };
      });

    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error reading clients directory:', error);
    return NextResponse.json([], { status: 500 });
  }
}
