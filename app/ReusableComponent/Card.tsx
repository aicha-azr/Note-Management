import React,{Children} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  title:string;
  body: string;
  createdAt:string;
}

const Card: React.FC<CardProps> = ({ className,body,createdAt,title, ...rest }) =>{
    return(
        // <>
        // <div className={cn(className, "shadow-md  rounded-sm p-2 bg-[#232323] text-white")} {...rest}>
        // {children}
        // </div>
        // </>
        <div className={cn(className,"max-w-md w-full mx-auto bg-pastell-blue rounded-md overflow-hidden shadow-lg p-3")}>
          <div className="p-2">
            <h2 className="text-xl text-blanc-casse font-semibold mb-2">{title}</h2>
            <p className="text-blanc-casse mb-4">{body}</p>
            <p className="text-sm text-blanc-casse">{createdAt}</p>
          </div>
        </div>
    )
}
export default Card;
