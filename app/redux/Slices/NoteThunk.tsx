import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define thunk action to fetch data
export const fetchAllNotes = createAsyncThunk(
    'notes/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('http://localhost:3000/api/notes');
        console.log(response.data.note)
        return response.data.note;

      } catch (error) {
        return rejectWithValue('Failed to fetch notes');
      }
    }
  );
  interface NoteData {
    title: string;
    description: string;
  }
  export const addNote = createAsyncThunk(
    'notes/addNote',
    async(noteData: NoteData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('http://localhost:3000/api/notes', noteData);
            console.log(response);
            return response.data;
        }catch(e){
            return rejectWithValue('Failed to add the note')
        }
    }
  );
  
  type dataId = string;
  export const editNote = createAsyncThunk(
    'notes/editNote',
    async({ noteData, id }: { noteData: NoteData, id: string }, {rejectWithValue}) =>{
        try{
            const response = await axios.put(`http://localhost:3000/api/notes/${id}`, noteData);
            console.log(response);
            return response.data;     
        }catch(e){
            return rejectWithValue('Failed to update the note')
        }
    }
  );
  export const getNote = createAsyncThunk(
    'notes/getoneNote',
    async(id:dataId, {rejectWithValue}) =>{
        try{
            const response = await axios.get(`http://localhost:3000/api/notes/${id}`);
            console.log(response);
            return response.data.note;
        }catch(e){
            return rejectWithValue('Failed to get the note')
        }
    }
  );
  export const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async(id: dataId, {rejectWithValue}) =>{
      try{
        const response = await axios.delete(`http://localhost:3000/api/notes/${id}`);
        console.log(response.data)
        return response.data;
      }catch(e){
        return rejectWithValue('Failed to delete the note')
      }
    }
  )
  