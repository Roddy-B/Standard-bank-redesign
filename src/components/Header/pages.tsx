"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiLock, FiMenu } from "react-icons/fi";
import { useState } from 'react';
import SearchBar from '../searchbar/page';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='w-full mx-auto'>
      <header className="bg-primary w-full h-[80px] flex justify-between items-center   font-medium font-inter text-base leading-6 tracking-wide ">
        <div className="flex items-center pl-28">
          <Image
            src="/logo.png"
            alt="logo do banco"
            width={40}
            height={40}
          />
          <div className="hidden md:block">
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
        <div className="flex items-center gap-4 md:gap-6 font-franklin font-medium">
          <button className="flex items-center gap-2" onClick={openSearch}>
            <FiSearch />
            <span className="hidden md:inline">Buscar</span>
          </button>
          <button className="hidden md:flex w-[298px] h-[80px] justify-center bg-secondary items-center gap-2 text-blue-950 font-semibold cursor-default">
            <FiLock />
            Acessar Entrar
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary p-4">
          <ul className="flex flex-col gap-4 font-franklin font-medium">
            <li>
              <Link href="#">Para Você</Link>
            </li>
            <li>
              <Link href="#">Para Empresas</Link>
            </li>
            <li>
              <Link href="#">Serviços</Link>
            </li>
            <li className="flex items-center gap-2">
              <FiLock />
              <Link href="#">Acessar Entrar</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && <SearchBar onClose={closeSearch} />}
    </div>
  );
}