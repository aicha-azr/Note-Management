import { FaPlus, FaUser, FaUserEdit } from "react-icons/fa";
import logo from '../assets/noted-logo.webp'
import logoicon from '../assets/favicon.webp'
import { RiCalendarLine } from "react-icons/ri";

const EditNote: React.FC = () => {
    return (
        <div className="flex justify-end mx-5">
        <div className="w-80 bg-blanc-casse text-burgendy p-6  shadow">
          <h2 className="text-xl font-bold mb-4">Form Title</h2>
          <div className="flex items-center mb-4">
            <RiCalendarLine className="mr-2 text-xl" />
            <span className="mr-4">28/02/2024</span>
            <input type="text" className="w-full p-2 text-burgendy  bg-transparent shadow border-0" placeholder="Add Title" />
          </div>
          <textarea className="w-full p-2 border-0 mb-4 bg-transparent shadow" placeholder="Enter text"></textarea>
          <button className="w-full bg-gold shadow text-burgendy py-2 ">Submit</button>
        </div>
      </div>
    );
};

export default EditNote;
