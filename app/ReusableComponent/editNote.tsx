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


interface editNote{
  id: string;
  className?:string
  children?: ReactNode;
}

const EditNote: React.FC<editNote> =  ({ id, className, children, ...rest }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: any) => state.notes);
  
  

  useEffect(() => {
    dispatch(getNote(id))

  }, [dispatch, id])

  /**function handleEdit(key: string){
      if(!title && !description) return;
    dispatch(editNote({title, description}))
  }*/
    return (
      //   <form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-orange-200 rounded-sm p-4 bg-blanc-casse text-white gap-[2rem]")} >
      //   <h2 className="text-xl font-bold mb-4">Form Title</h2>
      //     <div className="flex items-center mb-4">
      //       <RiCalendarLine className="mr-2 text-xl" />
      //       <span className="mr-4">28/02/2024</span>
      //       <input type="text" className="w-full p-2 text-burgendy  bg-transparent shadow border-0" placeholder="Add Title" />
      //     </div>
      //     <textarea className="w-full p-2 border-0 mb-4 bg-transparent shadow" placeholder="Enter text"></textarea>
      //     <button className="w-full bg-gold shadow text-burgendy py-2 ">Submit</button>
        
      // </form>
      <>
        <form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-orange-200 rounded-sm p-4 bg-blanc-casse text-white gap-[2rem]")} {...rest}>
        <h1 className='text-burgendy text-2xl font-bold'>Edit Note</h1>
          <label className='font-bold text-burgendy  text-lg p-1'>Title:</label>
          {data && <Title placeholder='Enter a title' className='shadow-md shadow-orange-200 ' value={data.title}/>}
          <label className='font-bold text-burgendy  text-lg  p-1'>Description:</label>
          {data && <Description placeholder='Enter a description' className=' shadow-orange-200 shadow-md  min-h-[10rem]' value={data.description}/>}
          <Button className=' text-1xl e p-2' >Update note</Button>
        </form>
        </>
    );
};

export default EditNote;
