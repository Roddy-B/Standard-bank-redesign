import { IoIosArrowForward } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";
import Link  from 'next/link';


export default function Atendimento() {
    return (
        <section className=" bg-white flex justify-center items-center py-28">
            <div className="w-[1216px] mx-auto flex flex-col items-center gap-16">
                <div className="mb-8 flex flex-col text-center">
                    <p className="text-5xl font-medium mb-4 font-franklin text-bluetext leading-6">
                        Atendimento
                    </p>
                    <p className="text-lg font-inter font-medium text-bluetext pt-2">
                        Você tem todo o suporte necessário para tirar dúvidas e encontrar soluções que precisa.
                    </p>
                </div>
                <div className=" flex  justify-between mb-4 gap-6">
                        <div className="w-96 h-[217px] bg-primaryc border-2 border-graycard rounded flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <FiMapPin className="w-8 h-8 text-primary" />
                                    <span className="font-inter font-normal text-graybody text-lg leading-lnL">Rede de atendimento</span>
                                </div>
                                <Link href={``}>
                                    <button className="bg-bluebtn w-[336px] h-14 rounded font-franklin text-base font-medium">
                                        Encontre uma agência
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-96 h-[217px] bg-primaryc border-2 border-graycard rounded flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <FaHeadset className="w-8 h-8 text-primary" />
                                    <span className="font-inter font-normal text-graybody text-lg leading-lnL">Central de atendimento</span>
                                </div>
                                <Link href={``}>
                                    <button className="bg-bluebtn w-[336px] h-14 rounded font-franklin text-base font-medium">
                                        Fale Conosco
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-96 h-[217px] bg-primaryc border-2 border-graycard rounded flex flex-col items-center justify-center">
                            <div className=" flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <IoChatboxEllipsesOutline className="w-8 h-8 text-primary" />
                                    <span className="font-inter font-normal text-graybody text-lg leading-lnL">Fale com um agente</span>
                                </div>
                                <Link href={``}>
                                    <button className="bg-bluebtn w-[336px] h-14 rounded font-franklin text-base font-medium">
                                        Conversar agora
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}