"use client"
import Image from "next/image";
import Card from '@/app/ReusableComponent/Card';
import SideBar from "@/app/ReusableComponent/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import { deleteNote, fetchAllNotes } from "./redux/Slices/NoteThunk";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  const { data } = useSelector((state: any) => state.notes);

  // Calculate current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Event handler for pagination buttons
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleClick = (id: string) => {
    if (typeof id === 'string') {
      router.push(`Edit/${id}`);
    }
  };
  function handleDelete(id: string){
    dispatch(deleteNote(id));
    window.location.reload();
  }
  
  return (
    <>
      <div className="h-screen bg-blanc-casse flex gap-2">
        <SideBar />
        <div className="grid flex-col ">
          <div className="bg-blanc-casse text-burgendy grid grid-cols-3 gap-2 h-fit justify-end mx-5">
            { !Array.isArray(data) || data.length === 0 ? ( 
              <div>No notes available</div>
            ) : (
              currentItems.map((item: any) => (
                <div className='relative' key={item._id}>
                  <Card
                    id={item._id}
                    onClick={() => handleClick(item._id)}
                    createdAt={item.createdAt}
                    body={item.description.substring(0, 60) + "..."}
                    title={item.title}
                    className=""
                  />
                  <button onClick={() => handleDelete(item._id)} className=' bg-blanc-casse rounded-lg p-1 absolute top-[5px] right-[5px]'>
                    <RiDeleteBin6Line className='text-pastell-red bottom-0 right-0' />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="mt-8 text-center font-bold grid-row-5 ">
            <button
              className="text-burgendy px-4 py-2 rounded-md mr-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaLongArrowAltLeft/>
            </button>
            {Array.from(Array(Math.ceil(data.length / itemsPerPage)).keys()).map((pageNumber) => (
              <button
                key={pageNumber + 1}
                className={`text-burgendy px-4 py-2 rounded-md mr-2 ${currentPage === pageNumber + 1 ? 'bg-gold' : ''}`}
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              className="text-burgendy px-4 py-2 rounded-md"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              <FaLongArrowAltRight/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

