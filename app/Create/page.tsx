"use client"
import Card from "../ReusableComponent/Card";
import Form from "../ReusableComponent/Form";
import SideBar from "../ReusableComponent/sidebar";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect } from "react";
import { fetchAllNotes, getNote } from "../redux/Slices/NoteThunk";
import EditNote from "../ReusableComponent/editNote";
import Link from "next/link";




export default function CreateNote(){
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(fetchAllNotes());
      }, [dispatch]);

      const { data} = useSelector((state: any) => state.notes);

      function handleget(key: string){
        dispatch(getNote(key))
      }
    return(<>
    <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
        <div className="w-[700px] shadow-md scroll overflow-auto p-2 gap-2 flex flex-col ">
            {
                Array.isArray(data) && data.length > 0? (
                    
                    data.map((item: any) => (
                       
                       <Card 
                            id={item._id} 
                            title={item.title} 
                            body={item.description.substring(0, 120)+" ..."}
                            createdAt={item.createdAt}
                            className="min-h-[10rem]"
                            onClick={()=>handleget(item._id)}
                        />
                        
                    ))
                ) : (
                    <div>No Notes Found</div>
                )
            }
            
        </div>
        
        <Form className="w-full m-8"/>
        </div>
    </div>
    </>)
} 
