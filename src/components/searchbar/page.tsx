"use client";

import { useEffect, useRef } from 'react';
import { IoIosSearch, IoMdClose } from "react-icons/io";

interface SearchBarProps {
  onClose: () => void; 
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const searchRef = useRef<HTMLDivElement>(null); // searchRef ajuda a iddentificarquando clica fora ou dentro do componente

  // Fecha quando clica fora so searchbar componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className='w-[1440px] mx-auto'>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 w-[1440px] mx-auto"></div>

      {/* Search Bar */}
      <div
        ref={searchRef}
        className="fixed top-0  w-[1145px] h-[80px] flex items-center justify-between bg-white z-50"
      >
        <form action="" className="flex justify-between items-center gap-5 mx-auto w-[900px]">
          <input
            name=""
            placeholder="O que você está procurando?"
            className="w-full h-[80px] focus:outline-none pl-2 text-[#4B5166] font-franklin font-medium text-lg"
            autoFocus 
          />
          <div className="flex gap-3 text-bluetext">
            <button type="submit">
              <IoIosSearch className="h-10 w-10" />
            </button>
            <button type="button" onClick={onClose}>
              <IoMdClose className="h-10 w-10" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}