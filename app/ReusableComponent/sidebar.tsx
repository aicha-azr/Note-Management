"use client"
import { FaPlus, FaUser, FaUserEdit } from "react-icons/fa";
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

            <div className="flex flex-col items-center gap-y-4 pb-10">
                <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
                    <svg width="24" height="24" className="h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16H12.01M12 8V12V8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="mt-2 rounded-full bg-gray-100">
                    <FaUser />
                </button>
            </div>
        </aside>
    );
};

export default SideBar;
