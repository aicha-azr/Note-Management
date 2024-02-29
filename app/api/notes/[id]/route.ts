import Connect from "@/app/Connection/connection";
import NotesModel from "@/app/Models/note";
import { NextResponse } from "next/server";

Connect();
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
