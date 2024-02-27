import React,{Children} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...rest }) =>{
    return(
        <>
        <div className={cn(className, "shadow-md  rounded-sm p-2 bg-[#232323] text-white")} {...rest}>
        {children}
        </div>
        </>
    )
}
export default Card;
