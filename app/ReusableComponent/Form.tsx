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
        <form className={cn(className, "flex flex-col items-stretch shadow-md rounded-sm p-2 bg-[#181818] text-white gap-[2rem] max-w-[550px]")} {...rest}>
        <Title/>
        <hr></hr>
        <Description/>
        <Button className='self-end'>Save</Button>
        
        </form>
        </>
    )
}
export default Form;
