import Image from "next/image";
import Hero from './../Pages/hero';
import Service from './../Pages/service';
import Digital from './../Pages/digital';
import Negocio from './../Pages/negocio';
import Cambio from './../Pages/cambio';
import Simulador from './../Pages/simulador';

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Hero />
      <Service />
      <Digital />
      <Negocio />
      <Cambio />
      <Simulador />
    </div>
  );
}
