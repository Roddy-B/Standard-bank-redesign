import { IconType } from "react-icons";
import Image from 'next/image';

interface ServiceCardProps {
  icon?: IconType;
  imageSrc?: string;
  text: string;
  alt: string;
}

export function Card({ icon: Icon, imageSrc, text, alt }: ServiceCardProps) {
  return (
    <div className="group">
      <div className="card-container w-32 h-32 md:w-44 md:h-44 flex flex-col border-[1px] border-graycard bg-primaryc text-primary items-center justify-center rounded transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
        <div className="p-2 flex flex-col items-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${alt} icon`}
              width={24}
              height={24}
              className="object-cover group-hover:text-white transition-colors duration-300"
            />
          ) : Icon ? (
            <Icon
              className="card-icon w-6 h-6 group-hover:text-white transition-colors duration-300"
              aria-label={text}
            />
          ) : (
            <div className="w-6 h-6 bg-gray-300 rounded-full" aria-hidden="true" />
          )}
          <p className="card-text font-medium text-lg text-graybody font-franklin w-[129px] items-center text-center group-hover:text-white transition-colors duration-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}