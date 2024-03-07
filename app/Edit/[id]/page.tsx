"use client"
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useEffect, useState } from "react";
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
    
   
      function handleget(key: string) {
        dispatch(getNote(key));
      }
      const { data} = useSelector((state: any) => state.notes);

      const handleClick = (id: string) => {
        if (typeof id === 'string' && router) {
            router.replace(`/Edit/${id}`);
        }
    };
      
      useEffect(() => {
        dispatch(fetchAllNotes());
      }, []);


  // Determine if it's a mobile device
  const isMobile = useWindowSize()?.width < 640;

    return(<>
    <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
        {!isMobile && (
            <div className="w-[500px]  shadow-md overflow-auto scrollbar-thin scrollbar-thumb-pastell-red scrollbar-track-blanc-casse  p-2 gap-2 flex flex-col">
              <h2 className="text-burgendy text-xl font-bold">Recent Notes</h2>
              {Array.isArray(data) &&  data.length > 0 ? (
                data.slice().reverse().map((item: any) => (<Card
                  key={item._id}
                  title={item.title}
                  body={item.description.substring(0, 80) + " ..."}
                  createdAt={item.createdAt}
                  className="min-h-[10rem]"
                  onClick={() => {
                    handleget(item._id);
                    handleClick(item._id); // Ensure that handleClick is called properly
                  }}
                  id={item._id}
                />
                ))
              ) : (
                <div>No Notes Found</div>
              )}
            </div>
          )}
        {id && <EditNote id={id as string} className="w-full m-8"/>}
        </div>
    </div>
    </>)
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

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}