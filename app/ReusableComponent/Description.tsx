"use client"
import React, { Children } from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Description: React.FC<CardProps> = ({ className, children, ...rest }) =>{
    return(        
        <textarea className={cn(className, 'text-white p-3 bg-[#181818] border-none h-[10%] max-h-fit')} {...rest}/>          
    )
}
export default Description;