"use client"
import React, { Children } from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Button: React.FC<CardProps> = ({ className, children, ...rest }) =>{
    return(        
        
        <button className={cn(className,'bg-gold p-4 shadow-md rounded-sm' )} {...rest}>{children}</button>
               
    )
}
export default Button;
