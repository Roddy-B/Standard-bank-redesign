import { IoIosArrowForward } from "react-icons/io";
import { SimuladorCard } from "@/components/cards/simulador";

export default function Simulador() {
    return (
        <section className=" bg-primaryb flex justify-center items-center py-28">
            <div className="w-[1216px] mx-auto flex flex-col items-center gap-16">
                <div className="mb-8 flex flex-col text-center">
                    <p className="text-5xl font-medium mb-4 font-franklin text-bluetext leading-6">
                        Simuladores
                    </p>
                    <p className="text-lg font-inter font-medium text-bluetext pt-2">
                        Explore nossos simuladores financeiros para tomar decisões inteligentes. Planeje, <br/>
                        simule e alcance seus objetivos financeiros com facilidade.</p>
                </div>
                <div className=" flex  justify-between mb-4 gap-6">
                        <SimuladorCard 
                            imageSrc="/cred.png"
                            text="CredAzul"
                            morelink="#"
                            />
                        <SimuladorCard imageSrc="/habit.png" text="Crédito Habitação" morelink="#"/>
                        <SimuladorCard imageSrc="/auto.png" text="Leasing Automóvel" morelink="#"/>
                        <SimuladorCard imageSrc="/QuiQ.png" text="QUIQMola 5 anos" morelink="#"/>
                </div>
                <div>
                    <p className='text-center text-lg font-normal leading-lnL text-bluebtn flex items-center gap-2' >
                        Ver todos simuladores
                        <IoIosArrowForward />
                    </p>
                </div>
            </div>
        </section>
    );
}