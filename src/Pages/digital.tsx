import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { Card } from '@/components/cards/page';


export default function Digital() {

    return (
        <div className=" mx-auto flex items-center justify-center p-28 font-franklin h-[720px]">
            <div className=" flex  gap-16 justify-center bg-primary p-16 rounded">
                <div className="flex flex-col items-start justify-center ">
                    <h1 className="text-4xl md:text-5xl font-medium font-franklin leading-lnH pt-4">
                        Digitalize sua vida
                    </h1>
                    <p className="text-base md:text-lg font-base  leading-lnL mt-4">
                        Conecte-se à modernidade com nossas soluções <br />
                        digitais - simplicidade e eficiência na ponta dos seus <br />
                        dedos.
                    </p>
                    <div className="text-base font-semibold leading-lnL pt-4">
                        <Link href="#" className="flex items-center gap-2" aria-label="Saber mais sobre digitalização">
                            Saber mais 
                            <IoIosArrowForward /> 
                        </Link>
                    </div>
                </div>
                <div>
                    <div className=" flex flex-col gap-8 justify-between">
                        <div className='flex gap-8'>
                            <Card imageSrc="/Bol.png" text="Bol" alt="Bol Logo" />
                            <Card imageSrc="/NetPlus.png" text="Net Plus" alt="Net Plus Logo" />
                        </div>
                        <div className='flex gap-8'>
                            <Card imageSrc="/QuiQ.png" text="QuiQ" alt="QuiQ Logo" />
                            <Card imageSrc="/ATM.png" text="Grande Depositos" alt="Grande Depositos Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}