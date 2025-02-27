"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/slide1.png',
    alt: 'Image 1',
    title: 'Banco pessoal simplificado',
    description: 'Escolha os produtos certos da nossa gama completa de soluções bancárias pessoais, para atender às suas necessidades financeiras.',
  },
  {
    src: '/slide2.jpg',
    alt: 'Image 2',
    title: 'Nao seja alvos de fraudes online',
    description: 'Seja extremamente vigilante contra golpes. arme-se entendendo o que procurar',
  },
  {
    src: '/slide3.jpg',
    alt: 'Image 3',
    title: 'O seu negócio é o nosso negócio',
    description: 'aproveite nossa oferta de produtos e serviços para melhor iniciar o seu negócio',
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // muda depois de 8 segundos

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden"> 
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1440}
            height={600}
            layout="responsive"
            priority
            className="w-full h-full object-cover" 
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.9)_-1.28%,_rgba(0,0,0,0.8)_-1.27%,_rgba(3,0,36,0.7)_46.83%,_rgba(3,0,36,0)_100%)]"
          ></div>
          
          {/* Text and button overlay */}
          <div className=" absolute inset-0 flex flex-col items-start justify-center text-white">
            <div className="pl-28">
              <div className='w-[512px]'>
                <h1 className="text-[56px] font-medium font-franklin leading-lnH">
                  {slides[currentSlide].title} 
                </h1>
                <div className="text-lg py-6">
                  <p>
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>
              <button className="bg-bluebtn hover:bg-blue-500 w-[186px] h-[56px] font-bold py-2 px-4 rounded text-white">
                Quero saber mais
              </button>
              
              <div className="flex gap-2 mt-16">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-16 h-1 rounded-lg transition-colors duration-300 ${
                      index === currentSlide ? 'bg-blue-500' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;