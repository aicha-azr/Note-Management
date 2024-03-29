import React, { TextareaHTMLAttributes } from 'react';
import { cn } from './cn/Cn';

interface CardProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Description: React.FC<CardProps> = ({ className, children, ...rest }) => {
    return(        
        <textarea className={cn(className, 'text-pastell-red text-sm p-3 bg-blanc-casse border-none max-h-[100%] h-fit w-full')} {...rest}/>          
    )
}

export default Description;
