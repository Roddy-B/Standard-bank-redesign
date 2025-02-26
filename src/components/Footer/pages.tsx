import Link from 'next/link';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="max-w-[1216px] mx-auto bg-white text-graybody mb-2 font-inter font-medium">
      <div className="flex flex-col md:flex-row gap-6 justify-between p-4 font-semibold leading-lnL ">
        <div>
          <h2 className="font-semibold text-2xl pb-4">Sobre Nós</h2>
          <ul className="pb-4 leading-6 tracking-custom-wide font-franklin font-medium space-y-2">
            <li><Link href="#">Nossos Valores</Link></li>
            <li><Link href="#">Visão</Link></li>
            <li><Link href="#">Responsabilidade Social</Link></li>
            <li><Link href="#">Código de conduta</Link></li>
            <li><Link href="#">Código de ética</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-2xl pb-4">Produto</h2>
          <ul className="leading-6 tracking-custom-wide font-franklin font-medium space-y-2">
            <li><Link href="#">Descoberto autorizado</Link></li>
            <li><Link href="#">CrediAzul</Link></li>
            <li><Link href="#">Crédito habitacão</Link></li>
            <li><Link href="#">Leasing</Link></li>
            <li><Link href="#">Equity Release</Link></li>
          </ul>
        </div>

        <div>
          <div>
            <h2 className="font-semibold text-2xl pb-4">Redes Sociais</h2>
            <div className="flex gap-6 p-2">
              <Link href="#"><FiYoutube className="w-6 h-6" /></Link>
              <Link href="#"><FiLinkedin className="w-6 h-6" /></Link>
              <Link href="#"><FiFacebook className="w-6 h-6" /></Link>
              <Link href="#"><FiInstagram className="w-6 h-6" /></Link>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-2xl font-semibold pb-5">Baixe o nosso app</p>
            <div className="flex flex-col md:flex-row gap-4 text-white">
              <Link href="#">
                <button className="flex w-full md:w-44 h-[74px] items-center justify-center bg-primary rounded-lg p-4"> 
                    <FaApple className="w-6 h-6 mr-2" />
                    <span>Download via Apple Store</span> 
                </button>
              </Link>
              <Link href="#">
                <button className="flex w-full md:w-44 h-[74px] items-center justify-center bg-primary rounded-lg p-4">
                    <FaGooglePlay className="w-6 h-6 mr-2" /> 
                    <span>Download via Google Play</span> 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8"></div>

      <div className="flex flex-col md:flex-row mt-4 justify-between p-4 font-franklin font-medium leading-6">
        <div className="w-full md:w-[595px] pr-4"> 
          <Image src="/logo2.png" alt="logo" width={30} height={30} />
          <p className="mt-2 leading-6 tracking-custom-wide ">
            PAIA | Fica | NCA © 2024 | standardbank.co.mz é um serviço de Internet
            Banking disponibilizado pelo Standard Bank, S.A.,autorizada nos
            termos da legislação sobre consultoria financeira e serviços de
            intermediação financeira.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-end pt-3 leading-6 tracking-custom-wide  text-graybody">
          <ul className="flex flex-col md:flex-row gap-5 underline underline-offset-2"> 
            <li><Link href="#">Standard Bank Group</Link></li>
            <li><Link href="#">Copyright</Link></li>
            <li><Link href="#">Termo e uso</Link></li>
            <li><Link href="#">Politica de privacidade</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}