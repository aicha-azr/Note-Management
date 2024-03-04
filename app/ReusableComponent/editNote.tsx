"use client"
import React,{Children, useEffect, useState} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import Title from './Title';
import Description from './Description';
import Button from './Button';
import { AppDispatch } from "@/app/redux/Store/store";
import { editNote, getNote } from '../redux/Slices/NoteThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


interface editNote{
  id: string;
  className?:string
  children?: ReactNode;
}

const EditNote: React.FC<editNote> =  ({ id, className, children, ...rest }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { note } = useSelector((state: any) => state.notes);
  const router = useRouter();
  useEffect(() => {
    dispatch(getNote(id))

  }, [dispatch, id])
  useEffect(()=>{
    if(note){
      setTitle(note.title);
      setDescription(note.description)
    }
  },[note])
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  function handleEdit(key: string){
      if(!title && !description) return;
    dispatch(editNote( {noteData: { title, description }, id}));
  router.back();  }
    return (
      <>
        <form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-orange-200 p-4 bg-blanc-casse gap-[2rem]")} {...rest}>
        <h1 className='text-pastell-red text-2xl font-bold'>Edit Note</h1>
          <label className='font-bold text-burgendy  text-lg p-1'>Title:</label>
          {note && <Title placeholder='Enter a title' className='shadow-md shadow-orange-200 ' value={title} onChange={(e)=>setTitle(e.target.value)}/>}
          <label className='font-bold text-burgendy  text-lg  p-1'>Description:</label>
          {note && <Description placeholder='Enter a description' className=' shadow-orange-200 shadow-md  min-h-[10rem]' value={description} onChange={(e)=>setDescription(e.target.value)}/>}
          <Button className=' text-1xl e p-2' onClick={()=>{handleEdit(id)}} >Update note</Button>
        </form>
        </>
    );
};

export default EditNote;
