import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactData {
    id: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

export async function POST(request: Request) {
  try {
        const data: ContactData = await request.json();

        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const dirPath = path.join(process.cwd(), 'data');
        const filePath = path.join(dirPath, 'contacts.json');

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        let existingData: ContactData[] = [];

        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf-8');
        try {
            existingData = JSON.parse(fileContents);
            if (!Array.isArray(existingData)) existingData = [];
        } catch (e) {
            existingData = [];
            console.error('Error reading existing contact data:', e); 
        }
        }

        existingData.push(data);

        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 4), 'utf-8');

        return NextResponse.json({ message: 'Contact data saved successfully' }, { status: 201 });
  } catch (error) {
        console.error('Error saving contact data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
