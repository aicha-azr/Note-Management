"use client"
import Image from "next/image";
import Card from '@/app/ReusableComponent/Card';
import SideBar from "@/app/ReusableComponent/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/Store/store";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import Head from 'next/head'
import { deleteNote, fetchAllNotes } from "./redux/Slices/NoteThunk";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import favicon from './assets/favicon.ico'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 

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
  
  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  return (
    <>
    <Head>
        <title>Noted</title>
        <link rel="icon" href="./assets/favicon.ico" sizes="any" />
      </Head>
      <div className="min-h-screen flex bg-blanc-casse">
        <SideBar />
        <div className="flex-1 flex flex-col items-center p-5">
          <h1 className="text-3xl font-black uppercase text-burgendy font-mono text-center mb-4">All Notes</h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {!Array.isArray(data) || data.length === 0 ? ( 
              <div className="text-center">No notes available</div>
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
                  <button onClick={() => handleDelete(item._id)} className='p-1 absolute bottom-0 right-0'>
                    <RiDeleteBin6Line className='text-gold text-xl' />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="mt-8 text-center font-bold">
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

