import { createSlice } from '@reduxjs/toolkit';
import {fetchAllNotes, addNote,editNote}  from '@/app/redux/Slices/NoteThunk';
import {fetchAllNotes, addNote, getNote}  from '@/app/redux/Slices/NoteThunk';

interface Note {
  _id: string;
  title: string;
  description: string;
}

interface NotesState {
  data: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  data: [],
  loading: false,
  error: null,
};


const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); 
        state.data.push(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editNote.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(editNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNote.fulfilled, (state, action) => {
        state.loading = false;
        state.data=action.payload; 
      })
      .addCase(getNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { reducer: notesReducer, actions: notesActions } = notesSlice;
