import  Image  from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";

interface ServiceCardProps {
    imageSrc ?: string;
    currency?: string;
    date: string;
    compra: string;
    venda: string;
}


export default function CambioCard({ imageSrc, date, compra, venda, currency }: ServiceCardProps) {
    return(
        <div >
            <div className="bg-primaryc w-[280px] h-[270px] rounded flex flex-col items-center justify-center text-[#4B5166] font-inter">
                <div className='p-4 flex flex-col items-center'>
                    {imageSrc &&
                        <Image 
                        src={imageSrc}
                        alt="icons"
                        width={32}
                        height={32}
                        className="object-cover"
                        />}
                        <span className='text-xs'>MZN | {currency}</span>
                </div>
                <div className='py-4 flex flex-col items-center'>
                    <div className='flex gap-8 pb-4 font-medium'>
                        <div >
                            <h5 className='text-sm'>Compra</h5>
                            <span className=' text-lg'>{compra}</span>
                        </div>
                        <div>
                            <h5 className='text-sm'>Venda</h5>
                            <span className='text-lg'>{venda}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 pt-6 text-xs'>
                        <FaRegCalendarAlt className=" card-icon w-4 h-4"/> 
                        <span >{date}</span>
                    </div>   
                </div>
            </div>
        </div>
    )
}