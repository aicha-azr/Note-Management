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

  return (<>
            <div className=" h-screen bg-blanc-casse flex gap-2">
              <SideBar/>
              <div className="flex flex-col ">
                 <div className="bg-blanc-casse text-burgendy p-6 grid grid-cols-3 gap-2 h-fit justify-end mx-5 ">
                    <Card createdAt="February 28, 2024" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam rhoncus nisi vitae ullamcorper. Donec sed mi at sapien volutpat tempus. Sed quis erat vitae justo faucibus efficitur ac sed sem." title="Note Title" className=""/>
                    <Card createdAt="February 28, 2024" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam rhoncus nisi vitae ullamcorper. Donec sed mi at sapien volutpat tempus. Sed quis erat vitae justo faucibus efficitur ac sed sem." title="Note Title" className=""/>
                    <Card createdAt="February 28, 2024" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam rhoncus nisi vitae ullamcorper. Donec sed mi at sapien volutpat tempus. Sed quis erat vitae justo faucibus efficitur ac sed sem." title="Note Title" className=""/>
                    <Card createdAt="February 28, 2024" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam rhoncus nisi vitae ullamcorper. Donec sed mi at sapien volutpat tempus. Sed quis erat vitae justo faucibus efficitur ac sed sem." title="Note Title" className=""/>
                    
                  </div>
                  <div className=" mt-8 font-medium self-center ">
                    <button className=" text-burgendy px-4 py-2 rounded-md mr-2">&laquo; Prev</button>
                    <button className=" text-burgendy px-4 py-2 rounded-md mr-2">1</button>
                    <button className=" text-burgendy px-4 py-2 rounded-md mr-2">2</button>
                    <button className=" text-burgendy px-4 py-2 rounded-md mr-2">3</button>
                    <button className=" text-burgendy px-4 py-2 rounded-md">&raquo; Next</button>
                  </div>
              </div>
             
            </div>
            </>
    
  );
}
