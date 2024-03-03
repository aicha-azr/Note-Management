"use client"
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect } from "react";
import { title } from "process";
import EditNote from "@/app/ReusableComponent/editNote";
import { fetchAllNotes, getNote } from "@/app/redux/Slices/NoteThunk";
import SideBar from "@/app/ReusableComponent/sidebar";
import Card from "@/app/ReusableComponent/Card";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function EditNotes({params}:{params: {id: string}}){
    const dispatch = useDispatch<AppDispatch>();
    const id  = params.id;
    const router = useRouter(); 
    
    useEffect(() => {
        dispatch(fetchAllNotes());
      }, [dispatch]);

      function handleget(key: string) {
        dispatch(getNote(key));
      }
      const { data} = useSelector((state: any) => state.notes);

      const handleClick = (id: string) => {
        if (typeof id === 'string') {
          router.push(`Edit/${id}`);
        }
      }

    return(<>
    <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
          <div className="w-[500px] shadow-md overflow-auto scrollbar-thin scrollbar-thumb-pastell-red scrollbar-track-blanc-casse  p-2 gap-2 flex flex-col">
            {Array.isArray(data) &&  data.length>0?  (
              data.map((item: any) => (
                  <Card
                  key={item._id}
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
        
        {id && <EditNote id={id as string} className="w-full m-8" />}
        </div>
    </div>
    </>)
} 