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
        <><form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-orange-200 p-4 bg-blanc-casse text-white gap-[2rem]")} {...rest}>
          <label className='text-burgendy font-bold text-lg  p-1'>Title:</label>
          <Title placeholder='Enter a title' className='shadow-md shadow-orange-200 ' onChange={(e)=>setTitle(e.target.value)}/>

          <label className='text-burgendy font-bold text-lg p-1'>Description:</label>
          <Description placeholder='Enter a description' className='shadow-orange-200 shadow-md  min-h-[10rem]' onChange={(e)=>setDescription(e.target.value)}/>
          <Button className=' text-1xl e p-2' onClick={handleCreate}>Add note</Button>
          
        </form>
        
        </>
    )
}
export default Form;
