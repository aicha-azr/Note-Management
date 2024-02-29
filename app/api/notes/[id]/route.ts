import mongoose from 'mongoose';
import NotesModel from '@/app/Models/note';
import { NextResponse } from 'next/server';
import Connect from '@/app/Connection/connection';

Connect();


export async function GET(_request: any, { params }: { params: { id: string } }) {

    try {
        const id = params.id;

        // Vérifier si l'ID est un ObjectId valide
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const body = JSON.stringify({ message: 'Invalid note ID' });
            const headers = { 'Content-Type': 'application/json' };
            const response = new NextResponse(body, { status: 400, headers });
            return response;
        }

        const result = await NotesModel.findById(id);
        
        if (result) { 
            const body = JSON.stringify({ note: result });
            const headers = { 'Content-Type': 'application/json' };
            const response = new NextResponse(body, { status: 200, headers });
            return response;
        } else {
            const body = JSON.stringify({ message: 'No note found' });
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

export async function PUT(req: any,{params}:{params:{id : string} }){
    try {
        
      const { title, description } = await req.json(); 
      const { id } = params
      

      const updatedNote = await NotesModel.findByIdAndUpdate(id, { title, description }, { new: true });

      // If the note is not found, return a 404 Not Found response
      if (!updatedNote) {
        return NextResponse.json({status:404, date:updatedNote});
      }

      // Return the updated note as a JSON response
      return NextResponse.json({status:200, date:updatedNote});
      

    } catch (error) {
     
      console.error(error);
      return NextResponse.json({ status: 500, error: 'Server error' });
    }
  } 

export async function DELETE(_request: any, { params }: { params: { id: string } }) {

    try {
        const id = params.id;

        // Vérifier si l'ID est un ObjectId valide
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const body = JSON.stringify({ message: 'Invalid note ID' });
            const headers = { 'Content-Type': 'application/json' };
            const response = new NextResponse(body, { status: 400, headers });
            return response;
        }

        const result = await NotesModel.findByIdAndDelete(id);
        
        if (result) { 
            const body = JSON.stringify({ message: 'Note deleted successfully' });
            const headers = { 'Content-Type': 'application/json' };
            const response = new NextResponse(body, { status: 200, headers });
            return response;
        } else {
            const body = JSON.stringify({ message: 'No note found with the provided ID' });
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