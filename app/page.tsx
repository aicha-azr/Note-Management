"use client"
import Image from "next/image";
import Card from '@/app/ReusableComponent/Card';
import SideBar from "@/app/ReusableComponent/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchAllNotes}  from "@/app/redux/Slices/NoteThunk";
import { AppDispatch } from "@/app/redux/Store/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  const { data} = useSelector((state: any) => state.notes);

  return (
    <>
      <div className="h-screen bg-blanc-casse flex gap-2">
        <SideBar />
        <div className="grid flex-col ">
          <div className="bg-blanc-casse text-burgendy p-6 grid grid-cols-3 gap-2 h-fit justify-end mx-5">
            { !data? (
              <div>No notes available</div>
            ) : (
              data.map((items: any) => (
                <Card key={items.id} createdAt={items.createdAt} body={items.description} title={items.title} className="" />
              ))
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

 /**const totalPages = 10;
  const currentPage = 1;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }*/