import { createSlice } from '@reduxjs/toolkit';
import {fetchAllNotes, addNote,editNote, getNote, deleteNote}  from '@/app/redux/Slices/NoteThunk';
interface Note {
  _id: string;
  title: string;
  description: string;
}

interface NotesState {
  data: Note[];
  note: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  data: [],
  note: [],
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
        const updatedNote = action.payload;
        const index = state.data.findIndex((note) => note._id === updatedNote._id);
        if (index !== -1) {
          state.data[index] = updatedNote;
        }
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
        state.data = action.payload; 
      })
      .addCase(getNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        const deletedNote = action.payload;
        const index = state.data.findIndex((note) => note._id === deletedNote._id);
        if (index !== -1) {
          state.data.splice(index, 1); 
        }
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { reducer: notesReducer, actions: notesActions } = notesSlice;
