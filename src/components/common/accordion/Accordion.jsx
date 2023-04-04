import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const Accordion = ({children,title, headerStyle, isArrow}) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
 

    <div  >
      <div
        className={`bg-white p-2 py-3 font-medium text-sm flex gap-2 items-center cursor-pointer px-3 w-full z-10 text-left border text-primary-500 border-gray-200 shadow-sm ${headerStyle}`}
        onClick={() => setIsOpen(!isOpen)}
        >
         <MdArrowForwardIos className={`w-3 h-3 transition-all duration-100 ease-out ${isArrow}  ${isOpen && "rotate-90"}`}/>
       {title}
       
      </div>
      <div className={` bg-white pl-3 flex transition-all duration-100 overflow-hidden ease-out rounded-lg text-left w-full ${
          isOpen ? 'h-auto opacity-[1] translat-y-0 ' : 'translate-y-[-20%] h-0 opacity-0  '
        }`}
      >
      <div className='pb-3 text-sm'> {isOpen && children} </div>
      </div>
    </div>
  );
};

      
export default Accordion;