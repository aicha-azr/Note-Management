import React,{Children} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/Store/store';
import { deleteNote } from '../redux/Slices/NoteThunk';

interface CardProps {
  className?: string;
  id:string
  title: string;
  body: string;
  children?: ReactNode;
  createdAt: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Card: React.FC<CardProps> = ({  className, body, createdAt, title, onClick, children, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div onClick={onClick} id={id} className={cn(className," max-w-md w-full shadow-orange-300 mx-auto border-l-8 border-pastell-red bg-pastell-blue overflow-hidden shadow p-3")}>
      <div className="p-2">
        <h2 className="text-xl capitalize text-blanc-casse font-semibold  font-mono mb-2">{title}</h2>
        <p className="text-blanc-casse font-mono text-sm mb-4">{body}</p>
        <p className="text-sm text-blanc-casse">{createdAt}</p>
      </div>
          {children}
    </div>
  );
}
export default Card;