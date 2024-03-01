"use client"
import React,{Children, useState} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import Title from './Title';
import Description from './Description';
import Button from './Button';
import { AppDispatch } from "@/app/redux/Store/store";
import { addNote, editNote } from '../redux/Slices/NoteThunk';
import { useDispatch } from 'react-redux';


interface editNote{
  className?:string
  children?: ReactNode;
}

const EditNote: React.FC<editNote> =  ({ className, children, ...rest }) => {

  const [title, setTitle]= useState('')
  const [description, setDescription] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  function handleEdit(){
      if(!title && !description) return;
    dispatch(editNote({title,description}))
    console.log("editing")
  }
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
          <Title placeholder='Enter a title' className='shadow-md shadow-orange-200 ' onChange={(e)=>setTitle(e.target.value)}/>
          <label className='font-bold text-burgendy  text-lg  p-1'>Description:</label>
          <Description placeholder='Enter a description' className=' shadow-orange-200 shadow-md  min-h-[10rem]' onChange={(e)=>setDescription(e.target.value)}/>
          <Button className=' text-1xl e p-2' onClick={handleEdit}>Add note</Button>
        </form>
        </>
    );
};

export default EditNote;
