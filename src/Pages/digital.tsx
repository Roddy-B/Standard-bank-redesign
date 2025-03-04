import { IoIosArrowForward } from "react-icons/io";
import { Card } from './../components/cards/page';
import Link  from 'next/link';

export default function Digital () {
    return (
        <div className="flex justify-center items-center py-28">
            <div className=" flex w-[1216px] h-[496px] mx-auto bg-primary py-14 px-28 justify-between rounded">
                <div className="text-white">
                    <h1 className="text-5xl font-medium font-franklin leading-lnH pt-4">Digitalize sua vida</h1>
                    <p className="text-lg font-base font-inter leading-lnL">
                        Conecte-se à modernidade com nossas soluções <br />
                        digitais - simplicidade e eficiência na ponta dos seus <br />
                        dedos.
                    </p>
                    <div className="text-base font-normal font-inter leading-lnL pt-4">
                        <Link href="#" className="flex items-center gap-2">
                            Saber mais 
                            <IoIosArrowForward /> 
                        </Link>
                        
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    <Card imageSrc="/Bol.png" text="Bol"/>
                    <Card imageSrc="/NetPlus.png" text="Net Plus"/>
                    <Card imageSrc="/QuiQ.png" text="QuiQ"/>
                    <Card imageSrc="/ATM.png" text="Grande Depositos"/>
                </div>
            </div>
        </div>
    )
}