import Link from 'next/link'
import Image from 'next/image';
import { FiSearch, FiLock  } from "react-icons/fi";

export default function Header() {
    return (
        <header className="bg-primary w-full h-[80px] flex justify-between items-center pl-28 font-medium font-inter text-base leading-6 tracking-wide ">
                <div className='flex items-center '>
                    <Image 
                    src="/logo.png"
                    alt="logo do banco"
                    width={40}
                    height={40}
                    />
                    <div>
                    <ul className='flex gap-4 pl-8 font-inter font-medium'>
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
                <div className='flex items-center gap-6 font-inter font-medium'>
                    <button className='flex items-center gap-2'>
                        <FiSearch />
                        Buscar
                    </button>
                    <button className='flex w-[298px] h-[80px] justify-center bg-secondary items-center gap-2 text-blue-950 font-semibold cursor-default'>
                        <FiLock />
                        Acessar Entrar
                    </button>
                </div>
        </header>
    );
}