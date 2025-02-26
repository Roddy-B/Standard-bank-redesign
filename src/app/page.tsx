import Image from "next/image";
import Hero from './../Pages/hero';
import Service from './../Pages/service';
import Digital from './../Pages/digital';
import Negocio from './../Pages/negocio';

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Hero />
      <Service />
      <Digital />
      <Negocio />
    </div>
  );
}
