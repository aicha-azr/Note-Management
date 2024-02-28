import React, { InputHTMLAttributes } from 'react';
import { cn } from './cn/Cn';

interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Title: React.FC<CardProps> = ({ className, children, ...rest }) => {
    return(        
        <input className={cn(className, 'text-black p-2 text-1xl bg-blanc-casse border-none')} {...rest}/>          
    )
}

export default Title;
