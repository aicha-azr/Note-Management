"use client"
import Image from "next/image";
import Card from '@/app/ReusableComponent/Card';
import SideBar from "@/app/ReusableComponent/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllNotes } from "@/app/redux/Slices/NoteThunk";
import { AppDispatch } from "@/app/redux/Store/store";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

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

  return (
    <>
      <div className="h-screen bg-blanc-casse flex gap-2">
        <SideBar />
        
        <div className="grid flex-col mt-10">
          
        <h1 className="text-4xl font-black uppercase text-burgendy font-mono text-center">All Notes</h1>
          <div className="bg-blanc-casse text-burgendy grid grid-cols-3 gap-2 h-fit justify-end mx-5">
            {!data ? (
              <div>No notes available</div>
            ) : (
              currentItems.map((item: any) => (
                
                <Card
                  key={item.id}
                  createdAt={item.createdAt}
                  body={item.description.substring(0, 100) + "..."}
                  title={item.title}
                  className=""
                />
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
