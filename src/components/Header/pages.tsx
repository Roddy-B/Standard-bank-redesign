"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiLock } from "react-icons/fi";
import { useState } from 'react';
import SearchBar from '../searchbar/page';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <div className=' w-[1440px] mx-auto '>
      <header className="bg-primary w-full h-[80px]  flex justify-between items-center pl-28 font-medium font-inter text-base leading-6 tracking-wide ">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo do banco"
            width={40}
            height={40}
          />
          <div>
            <ul className="flex gap-4 pl-8 font-franklin font-medium">
              <li>
                <Link href="#">Para Você</Link>
              </li>
              <li>
                <Link href="#">Para Empresas</Link>
              </li>
              <li>
                <Link href="#">Serviços</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6 font-franklin font-medium">
          <button className="flex items-center gap-2" onClick={openSearch}>
            <FiSearch />
            Buscar
          </button>
          <button className="flex w-[298px] h-[80px] justify-center bg-secondary items-center gap-2 text-blue-950 font-semibold cursor-default">
            <FiLock />
            Acessar Entrar
          </button>
        </div>
      </header>

      {/* abre o searchbar quando o valor for verdadeiro */}
      {isSearchOpen && <SearchBar onClose={closeSearch} />}
    </div>
  );
}