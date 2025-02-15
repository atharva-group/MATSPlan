import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const filePath = path.join(process.cwd(), 'contact_submissions.json');
    
    // Read existing data
    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is empty, start with an empty array
    }

    // Add new submission
    existingData.push(data);

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: 'Form data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Error saving form data' }, { status: 500 });
  }
}
