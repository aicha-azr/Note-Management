"use client"
import React, { Children } from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Title: React.FC<CardProps> = ({ className, children, ...rest }) =>{
    return(        
        <input className={cn(className, 'text-white p-2 text-2xl bg-[#181818] border-none')} {...rest}/>          
    )
}
export default Title;
