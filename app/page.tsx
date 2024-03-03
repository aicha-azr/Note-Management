"use client"
import Card from '@/app/ReusableComponent/Card';
import SideBar from "@/app/ReusableComponent/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {deleteNote, fetchAllNotes}  from "@/app/redux/Slices/NoteThunk";
import { AppDispatch } from "@/app/redux/Store/store";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Home() {
  const router = typeof window !== 'undefined' ? useRouter() : null!;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  const { data} = useSelector((state: any) => state.notes);

  const handleClick = (id: string) => {
    if (typeof id === 'string') {router.push(`/${id}`)};
     
  };
  function handleDelete(id: string){
    dispatch(deleteNote(id))
  }
  return (
    <>
      <div className="h-screen bg-blanc-casse flex gap-2">
        <SideBar />
        <div className="grid flex-col ">
          <div className="bg-blanc-casse text-burgendy grid p-2 grid-cols-3 gap-2 h-fit justify-end mx-5">
            { Array.isArray(data) && data.length > 0? (
              data.map((items: any) => (<div className='relative'>
               <Card id={items._id} createdAt={items.createdAt} body={items.description.substring(0, 120)+" ..."} title={items.title} className="" onClick={()=>handleClick(items._id)}/>
               <button onClick={()=>handleDelete(items._id)} className=' bg-blanc-casse rounded-lg p-1 absolute top-[5px] right-[5px]'>
            <RiDeleteBin6Line className='text-pastell-red bottom-0 right-0' />
          </button>
          </div>
               ))
             
            ):(
              <div>No notes available</div>
            )}
          </div>
          <div className="mt-8 font-medium self-center grid-row-5 ">
            <button className="text-burgendy px-4 py-2 rounded-md mr-2">&laquo; Prev</button>
            <button className="text-burgendy px-4 py-2 rounded-md mr-2">1</button>
            <button className="text-burgendy px-4 py-2 rounded-md mr-2">2</button>
            <button className="text-burgendy px-4 py-2 rounded-md mr-2">3</button>
            <button className="text-burgendy px-4 py-2 rounded-md">&raquo; Next</button>
          </div>
        </div>
      </div>
    </>
  );
}