import { IconType } from "react-icons";
import  Image  from 'next/image';
import Link  from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

interface ServiceCardProps {
  icon ?: IconType;
  imageSrc ?: string;
  text: string;
  morelink: string;
}

export function SimuladorCard ({ icon: Icon, imageSrc,  text, morelink}: ServiceCardProps) {
    return (
            <div>
              <div className="card-container w-[280px] h-44 flex flex-col border-[1px] border-graycard bg-primaryc text-primary items-center justify-center rounded">
                <div className="p-2 flex flex-col items-center font-inter">
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
                   <p className="card-text font-medium text-lg text-graybody font-franklin pt-2 items-center text-center">{text}</p>
                   <Link className="text-base font-franklin font-normal leading-lnL text-bluebtn flex gap-2 items-center pt-4" href="{morelink}">
                        Simular agora 
                        <IoIosArrowForward />
                    </Link>
                </div>
                
              </div>
            </div>
    )

}