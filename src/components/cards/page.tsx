import { IconType } from "react-icons";
import  Image  from 'next/image';

interface ServiceCardProps {
  icon ?: IconType;
  imageSrc ?: string;
  text: string;
}

export function Card ({ icon: Icon, imageSrc,  text }: ServiceCardProps) {
    return (
            <div>
              <div className="card-container w-44 h-44 flex flex-col bg-primaryc text-primary items-center justify-center rounded">
                <div className="p-2 flex flex-col items-center">
                  {imageSrc &&
                    <Image 
                    src={imageSrc}
                    alt="icons"
                    width={24}
                    height={24}
                    className="object-cover"
                    />}
                  {Icon && 
                    <Icon className=" card-icon w-6 h-6"/> }
                   <p className="card-text font-medium text-lg text-graybody font-franklin w-[129px] items-center text-center">{text}</p>
                </div>
                
              </div>
            </div>
    )

}