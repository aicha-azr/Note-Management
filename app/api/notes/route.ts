import NotesModel from '@/app/Models/note';
import { NextResponse, NextRequest } from 'next/server';
import Connect from '@/app/Connection/connection'

export async function GET(request: NextRequest) {
 Connect(); 
  try {
    const result = await NotesModel.find();
    if (result.length !== 0) {
      const body = JSON.stringify({ note: result });
      const headers = { 'Content-Type': 'application/json' };
      const response = new NextResponse(body, { status: 200, headers });
      return response;
    } else {
      const body = JSON.stringify({ message: 'no note found' });
      const headers = { 'Content-Type': 'application/json' };
      const response = new NextResponse(body, { status: 404, headers });
      return response;
    }
  } catch (e: any) {
    const body = JSON.stringify({ error: e.message });
    const headers = { 'Content-Type': 'application/json' };
    const response = new NextResponse(body, { status: 500, headers });
    return response;
  }
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

