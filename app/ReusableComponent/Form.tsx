"use client"
import React,{Children, useState} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import Title from './Title';
import Description from './Description';
import Button from './Button';
import { AppDispatch } from "@/app/redux/Store/store";
import { addNote } from '../redux/Slices/NoteThunk';
import { useDispatch } from 'react-redux';
interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Form: React.FC<CardProps> = ({ className, children, ...rest }) =>{
  const [title, setTitle]= useState('')
  const [description, setDescription] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  function handleCreate(){
      if(!title && !description) return;
    dispatch(addNote({title,description}))
  }
    return(
        <>
        <form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-slate-800 rounded-sm p-4 bg-blanc-casse text-white gap-[2rem]")} {...rest}>
        <label className='text-black text-2xl font-bold p-1'>Title:</label>
        <Title placeholder='Enter a title' onChange={(e)=>setTitle(e.target.value)}/>
        <hr className='border-t border-black h-px'></hr>
        <label className='text-black text-2xl font-bold p-1'>Description:</label>
        <Description placeholder='Enter a description' className='min-h-[10rem]' onChange={(e)=>setDescription(e.target.value)}/>
        <Button className=' text-1xl p-2' onClick={handleCreate}>Add note</Button>
        
        </form>
        </>
    )
}
export default Form;
