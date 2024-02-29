import NotesModel from '../../Models/note'; // Adjust the path as per your project structure
import Connect from '../../Connection/connection'; // Adjust the path as per your project structure
import { NextResponse } from 'next/server';




Connect();
export function GET()
{
  return NextResponse.json({hello:"world",});
}

export async function POST(req: Request) {
    try {
      const { title, description } = await req.json(); 

      const newNote =  await NotesModel.create({
        title,
        description,
      });

      
      return NextResponse.json({status:201, date:newNote});
    } catch (error) {
     
      console.error(error);
      return NextResponse.json({ status: 500, error: 'Server error' });
    }
  } 
  
 
