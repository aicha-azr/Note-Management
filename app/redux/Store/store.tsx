import {configureStore} from '@reduxjs/toolkit';
import {notesReducer} from '../Slices/GetAllNotesSlice'
import { useDispatch } from 'react-redux';
 const store = configureStore({
    reducer:{
        notes: notesReducer,
    }

})
export type AppDispatch = typeof store.dispatch
//export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store