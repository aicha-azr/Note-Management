import React from 'react';
import { cn } from './cn/Cn';

interface CardProps {
  className?: string;
  title: string;
  body: string;
  createdAt: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Card: React.FC<CardProps> = ({ className, body, createdAt, title, onClick }) => {
  return (
    <div onClick={onClick} className={cn(className, "max-w-md w-full mx-auto bg-pastell-blue rounded-md overflow-hidden shadow p-3")}>
      <div className="p-2">
        <h2 className="text-xl text-blanc-casse font-semibold mb-2">{title}</h2>
        <p className="text-blanc-casse text-sm mb-4">{body}</p>
        <p className="text-sm text-blanc-casse">{createdAt}</p>
      </div>
    </div>
  );
}

export default Card;
