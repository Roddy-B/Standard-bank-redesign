import { IconType } from "react-icons";
import  Image  from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ServiceCardProps {
  imageSrc ?: string;
  date: string;
  titulo: string;
}

export function Post ({ imageSrc, date, titulo}: ServiceCardProps) {
    return (
            <div>
              <div className="card-container w-[384px] h-[428px] flex flex-col border-[1px] border-graycard bg-primaryc text-primary items-center justify-center rounded hover:border-bluebtn">
                <div className="p-2 flex flex-col items-center">
                    <div>
                        {imageSrc &&
                            <Image 
                            src={imageSrc}
                            alt="icons"
                            width={384}
                            height={220}
                            className="object-cover"
                            />}
                    </div>
                    <div className="w-[384px] h-[208] flex flex-col gap-8 p-4">
                            <div className="flex flex-col  text-graybody gap-4">
                                <div className='flex items-center gap-2  text-xs'>
                                    <FaRegCalendarAlt className=" card-icon w-4 h-4"/> 
                                    <span >{date}</span>
                                </div>
                                <div className="font-franklin text-lg font-medium leading-lnL">
                                    <p>{titulo}</p>
                                </div>
                            </div>
                            <div>
                                <Link href={``} className="flex text-bluebtn text-base font-medium font-inter gap-2 items-center">
                                    Ler mais
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                        
                    </div>
                    
                </div>
              </div>
            </div>
    )

}