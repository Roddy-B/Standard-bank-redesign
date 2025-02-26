import { IoIosArrowForward } from "react-icons/io";
import { Post } from "@/components/Posts/page";

export default function Noticia() {
    return (
        <section className=" bg-primaryb flex justify-center items-center py-28">
            <div className="w-[1216px] mx-auto flex flex-col items-center gap-16">
                <div className="mb-8 flex flex-col text-center">
                    <p className="text-5xl font-medium mb-4 font-franklin text-bluetext leading-6">
                        Últimas notícias
                    </p>
                    <p className="text-lg font-inter font-medium text-graybody pt-2">
                        Acompanhe as últimas notícias sobre o Standard Bank.
                    </p>
                </div>
                <div className=" flex  justify-between mb-4 gap-6">
                        < Post 
                            imageSrc="/noticia1.jpg"
                            date="26/02.2025"
                            titulo="Nova Parceria Bancária Revoluciona Acesso aos Serviços Financeiros..."
                        />
                        < Post 
                            imageSrc="/not2.jpg"
                            date="26/02.2025"
                            titulo="Standard Bank considera o desenvolvimento humano e de..."
                        />
                        < Post 
                            imageSrc="/not3.jpg"
                            date="26/02.2025"
                            titulo="O Standard Bank realizou,  em Maputo, uma conferência para a mulher..."
                        />
                </div>
                <div>
                    <p className='text-center text-lg font-normal leading-lnL text-bluebtn flex items-center gap-2' >
                        Ver todas as Notícias
                        <IoIosArrowForward />
                    </p>
                </div>
            </div>
        </section>
    );
}