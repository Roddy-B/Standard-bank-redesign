import { IoIosArrowForward } from "react-icons/io";
import { Card } from './../components/cards/page';
import Link from 'next/link';

export default function Digital() {
    return (
        <div className="flex justify-center items-center py-28">
            <div className="flex w-full max-w-[1216px] h-auto md:h-[496px] mx-auto bg-primary py-14 px-4 md:px-28 justify-between rounded-lg">
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-medium font-franklin leading-lnH pt-4">
                        Digitalize sua vida
                    </h1>
                    <p className="text-base md:text-lg font-base font-inter leading-lnL mt-4">
                        Conecte-se à modernidade com nossas soluções <br />
                        digitais - simplicidade e eficiência na ponta dos seus <br />
                        dedos.
                    </p>
                    <div className="text-base font-normal font-inter leading-lnL pt-4">
                        <Link href="#" className="flex items-center gap-2" aria-label="Saber mais sobre digitalização">
                            Saber mais 
                            <IoIosArrowForward /> 
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 mt-8 md:mt-0">
                    <Card imageSrc="/Bol.png" text="Bol" alt="Bol Logo" />
                    <Card imageSrc="/NetPlus.png" text="Net Plus" alt="Net Plus Logo" />
                    <Card imageSrc="/QuiQ.png" text="QuiQ" alt="QuiQ Logo" />
                    <Card imageSrc="/ATM.png" text="Grande Depositos" alt="Grande Depositos Logo" />
                </div>
            </div>
        </div>
    );
}