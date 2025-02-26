import { IconType } from "react-icons";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

interface ServiceCardProps {
  icon?: IconType;
  imageSrc?: string;
  text: string;
  morelink: string;
}

export function SimuladorCard({ icon: Icon, imageSrc, text, morelink }: ServiceCardProps) {
  return (
    <div className="group">
      <div className="card-container w-[280px] h-44 flex flex-col border-[1px] border-graycard bg-primaryc text-primary items-center justify-center rounded transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
        <div className="p-2 flex flex-col items-center font-inter">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="icons"
              width={24}
              height={24}
              className="object-cover transition-colors duration-300 group-hover:text-white"
            />
          )}
          {Icon && (
            <Icon className="card-icon w-6 h-6 transition-colors duration-300 group-hover:text-white" />
          )}
          <p className="card-text font-medium text-lg text-graybody font-franklin pt-2 items-center text-center transition-colors duration-300 group-hover:text-white">
            {text}
          </p>
          <Link
            className="text-base font-franklin font-medium leading-lnL text-bluebtn flex gap-2 items-center pt-4 transition-colors duration-300 group-hover:text-white"
            href={morelink} 
          >
            Simular agora
            <IoIosArrowForward className="transition-colors duration-300 group-hover:text-white"/>
          </Link>
        </div>
      </div>
    </div>
  );
}