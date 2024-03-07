"use client"
import Card from "../ReusableComponent/Card";
import Form from "../ReusableComponent/Form";
import SideBar from "../ReusableComponent/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect, useState } from "react";
import { fetchAllNotes, getNote } from "../redux/Slices/NoteThunk";
import EditNote from "../ReusableComponent/editNote";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

export default function CreateNote() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 

 
  const { data } = useSelector((state: any) => state.notes);

  function handleget(key: string) {
    dispatch(getNote(key));
  }
  const handleClick = (id: string) => {
    if (typeof id === 'string') {
      router.push(`Edit/${id}`);
    }
  };
  
 useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  
  // Determine if it's a mobile device
  const isMobile = useWindowSize().width < 640;

  return (
    <>
      <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
        {!isMobile && <div className="w-[500px]  shadow-md overflow-auto scrollbar-thin scrollbar-thumb-pastell-red scrollbar-track-blanc-casse  p-2 gap-2 flex flex-col">
            {Array.isArray(data) &&  data.length > 0 ? (
              data.slice().reverse().map((item: any) => (
                <Card
                  key={item._id}
                  title={item.title}
                  body={item.description.substring(0, 80) + " ..."}
                  createdAt={item.createdAt}
                  className="min-h-[10rem]"
                  onClick={() => {handleget(item._id); handleClick(item._id)}}
                  id={item._id}
                />
              ))
            ) : (
              <div>No Notes Found</div>
            )}
          </div>} 
          
          <Form className="w-full m-8" />
        </div>
      </div>
    </>
  );
}
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}