// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <div className="container mx-auto  relative">
        <div className="flex items-center justify-center">
          {/* Image */}
          <Image
            src="/slide1.png"
            alt="Banco pessoal simplificado"
            width={1440}
            height={600}
            className=" inset-0 object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.9)_-1.28%,_rgba(0,0,0,0.8)_-1.27%,_rgba(3,0,36,0.7)_46.83%,_rgba(3,0,36,0)_100%)]"
          ></div>

          {/* Conteúdo sobreposto */}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
            <div className="pl-28">
              <h1 className="text-[56px] font-medium font-franklin leading-lnH">Banco pessoal <br className='pt-2'/>simplificado</h1>
              <div className="text-lg py-6">
                <p >Escolha os produtos certos da nossa gama completa <br />
                de soluções bancárias pessoais, para atender às suas <br />
                necessidades financeiras.</p>
              </div>
              

              <button className="bg-bluebtn hover:bg-blue-500 w-[186px] h-[56px] font-bold py-2 px-4 rounded text-white">
                Quero saber mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}