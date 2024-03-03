import React, { Children, ReactNode } from 'react';
import { cn } from './cn/Cn';
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

const Card: React.FC<CardProps> = ({ className, body, createdAt, title, onClick, children, id }) => {
  const dispatch = useDispatch<AppDispatch>();
 
  return (
    <div onClick={onClick} id={id} className={cn(className, "max-w-md w-full mx-auto bg-pastell-blue rounded-md overflow-hidden shadow p-3")}>
      <div className="p-2">
        <h2 className="text-xl text-blanc-casse font-semibold mb-2">{title}</h2>
        <p className="text-blanc-casse text-sm mb-4">{body}</p>
        <p className="text-sm text-blanc-casse">{createdAt}</p>
      </div>
        
          {children}
    </div>
  );
}

export default Card;
