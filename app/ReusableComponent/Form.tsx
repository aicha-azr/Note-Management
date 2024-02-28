import React,{Children} from 'react';
import { cn } from './cn/Cn';
import { ReactNode } from 'react';
import Title from './Title';
import Description from './Description';
import Button from './Button';

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Form: React.FC<CardProps> = ({ className, children, ...rest }) =>{
    return(
        <>
        <form className={cn(className, "flex flex-col items-stretch shadow-md  shadow-slate-800 rounded-sm p-4 bg-blanc-casse text-white gap-[2rem]")} {...rest}>
        <label className='text-black text-2xl font-bold p-1'>Title:</label>
        <Title placeholder='Enter a title'/>
        <hr className='border-t border-black h-px'></hr>
        <label className='text-black text-2xl font-bold p-1'>Description:</label>
        <Description placeholder='Enter a description' className='min-h-[10rem]'/>
        <Button className=' text-1xl p-2'>Add note</Button>
        
        </form>
        </>
    )
}
export default Form;
