"use client"
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect } from "react";
import { title } from "process";
import EditNote from "@/app/ReusableComponent/editNote";
import { fetchAllNotes } from "@/app/redux/Slices/NoteThunk";
import SideBar from "@/app/ReusableComponent/sidebar";
import Card from "@/app/ReusableComponent/Card";



export default function CreateNote(){
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(fetchAllNotes());
      }, [dispatch]);

      const { data} = useSelector((state: any) => state.notes);

    return(<>
    <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
        <div className="w-[700px] shadow-md scroll overflow-auto p-2 gap-2 flex flex-col ">
            {
                !data ? (
                    <div>No Notes Found</div>
                ) : (
                    data.map((item: any, index: number) => (
                        <Card   
                        key={index} 
                        title={item.title} 
                        body={item.description.substring(0, 120)+" ..."}
                        createdAt={item.createdAt}
                        className="min-h-[10rem]"
                    ></Card>
                    ))
                )
            }
            
        </div>
        
        <EditNote className="w-full m-8"/>
        </div>
    </div>
    </>)
} 