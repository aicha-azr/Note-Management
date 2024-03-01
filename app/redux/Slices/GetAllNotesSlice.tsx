import { createSlice } from '@reduxjs/toolkit';
import {fetchAllNotes, addNote}  from '@/app/redux/Slices/NoteThunk';

// Define initial state
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

// Create slice
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // Additional reducers can be defined here if needed
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
        state.data.push(action.payload); // Append the new note to the existing array
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

// Export individual action creators and reducer
export const { reducer: notesReducer, actions: notesActions } = notesSlice;
