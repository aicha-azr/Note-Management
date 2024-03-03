import React,{Children} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface CardProps {
  className?: string;
  title:string;
  body: string;
  createdAt:string;
}

const Card: React.FC<CardProps> = ({ className,body,createdAt,title, ...rest }) =>{
    return(
        <div className={cn(className," max-w-md w-full shadow-orange-300 mx-auto border-l-8 border-pastell-red bg-pastell-blue overflow-hidden shadow p-3")}>
          <div className="p-2">
            <h2 className="text-xl capitalize text-blanc-casse font-semibold  font-mono mb-2">{title}</h2>
            <p className="text-blanc-casse font-mono text-sm mb-4">{body}</p>
            <p className="text-sm text-blanc-casse">{createdAt}</p>
          </div>
          <button >
            <RiDeleteBin6Line className='text-gold bottom-0 right-0' />
          </button>
        </div>
    )
}
export default Card;