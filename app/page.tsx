import Image from "next/image";
import Card from '@/app/ReusableComponent/Card';
import Form from "./ReusableComponent/Form";
import SideBar from "./ReusableComponent/sidebar";
import EditNote from "./ReusableComponent/editNote";

export default function Home() {
  const totalPages = 10;
  const currentPage = 1;

  // Function to generate an array of page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex  h-screen  bg-blanc-casse">

      <SideBar/>
      <EditNote/>
    </div>
  );
}
