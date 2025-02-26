import Link from 'next/link';
import CambioCard from './../components/cards/cambio';
import { IoIosArrowForward } from "react-icons/io";


export default function Cambio() {

    return (
        <div className="bg-primary mx-auto flex items-center justify-center">
            <div className="p-28 flex flex-col gap-16 justify-center">
                <div className="flex items-center justify-between ">
                    <h1 className="text-5xl font-medium font-franklin leading-lnH pt-4">Câmbios indicativos</h1>
                    <Link href="#" className='text-lg font-normal leading-lnL flex items-center gap-2'>Ver mais taxas de forex  <IoIosArrowForward /></Link>
                </div>
                <div>
                    <div className=" flex gap-6 justify-between">
                        <CambioCard 
                            imageSrc='/usd.png'
                            currency='USD'
                            compra='63.45'
                            venda='64.52'
                            date='26/02/25'     
                        />
                        <CambioCard 
                            imageSrc='/eur.png'
                            currency='EUR'
                            compra='73.45'
                            venda='74.53'
                            date='26/02/25'     
                        />
                        <CambioCard 
                            imageSrc='/zar.png'
                            currency='ZAR'
                            compra='3.45'
                            venda='3.52'
                            date='26/02/25'     
                        />
                        <CambioCard 
                            imageSrc='/gbp.png'
                            currency='GBP'
                            compra='73.45'
                            venda='67.52'
                            date='26/02/25'     
                        />
                    </div>
                </div>
                <div >
                    <p className='text-center text-lg font-normal leading-lnL' >As tarifas são indicativas e 15 min atrasadas </p>
                </div>
            </div>
        </div>
    )
}