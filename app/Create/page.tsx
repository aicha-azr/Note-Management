"use client"
import Card from "../ReusableComponent/Card";
import Form from "../ReusableComponent/Form";
import SideBar from "../ReusableComponent/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect } from "react";
import { fetchAllNotes, getNote } from "../redux/Slices/NoteThunk";
import EditNote from "../ReusableComponent/editNote";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

export default function CreateNote() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  const { data } = useSelector((state: any) => state.notes);

  function handleget(key: string) {
    dispatch(getNote(key));
  }
  const handleClick = (id: string) => {
    if (typeof id === 'string') {
      router.push(`Edit/${id}`);
    }
  };

  return (
    <>
      <div className="h-screen flex bg-blanc-casse">
        <SideBar />
        <div className="flex w-full">
          <div className="w-[500px] shadow-md overflow-auto scrollbar-thin scrollbar-thumb-pastell-red scrollbar-track-blanc-casse  p-2 gap-2 flex flex-col">
            {Array.isArray(data) &&  data.length>0?  (
              data.map((item: any) => (
                  <Card
                    title={item.title}
                    body={item.description.substring(0, 120) + " ..."}
                    createdAt={item.createdAt}
                    className="min-h-[10rem]"
                    onClick={() => {handleget(item._id); handleClick(item._id)}}
                    id={item._id}
                  />
              ))
            ):(
              <div>No Notes Found</div>
            ) }
          </div>
                
          <Form className="w-full m-8" />
        </div>
      </div>
    </>
  );
}
