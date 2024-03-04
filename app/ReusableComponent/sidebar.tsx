"use client"
import { FaHome, FaPlus, FaUser, FaUserEdit } from "react-icons/fa";

import Image from 'next/image'
import logo from '../assets/noted-logo.webp'
import logoicon from '../assets/favicon.webp'
import { BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import CreateNote from "../Create/page";

const SideBar: React.FC = () => {
    return (
        <aside className="flex flex-col items-center justify-between w-20 border-r border-burgendy bg-blanc-casse ">
            <div className="flex flex-col items-center pt-2">
                {/* Sidebar content */}
                <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-burgendy p-2">
                    <Image  src={logoicon} width={500} height={500} alt="Picture of the author"/>
                </div>
                <nav className="flex flex-col gap-y-4 pt-10">
                    <div className="group text-2xl rounded-xl text-burgendy hover:bg-blanc-casse">
                        
                        <Link href="/">
                            <FaHome/>
                        </Link>
                         <br />
                        <Link href="/Create">
                        <BiPlusCircle/>
                        </Link>
                        
                        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                            <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                <div className="absolute inset-0 -left-1 flex items-center">
                                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="flex flex-col items-center  pb-10">
                <button className="mt-2 rounded-full bg-burgendy p-2">
                    <FaUser />
                </button>
            </div>
        </aside>
    );
};

export default SideBar;