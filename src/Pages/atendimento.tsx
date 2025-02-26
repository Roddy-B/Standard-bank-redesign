import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";
import AtendimentoCard from './../components/cards/atendimento';


export default function Atendimento() {
    return (
        <section className=" bg-white flex justify-center items-center py-28">
            <div className="w-[1216px] mx-auto flex flex-col items-center gap-16">
                <div className="mb-8 flex flex-col text-center">
                    <p className="text-5xl font-medium mb-4 font-franklin text-bluetext leading-6">
                        Atendimento
                    </p>
                    <p className="text-lg font-inter font-medium text-graybody pt-2">
                        Você tem todo o suporte necessário para tirar dúvidas e encontrar soluções que precisa.
                    </p>
                </div>
                <div className="flex justify-between mb-4 gap-6">
      <AtendimentoCard icon={FiMapPin } tipo="Rede de atendimento" specbtn="Encontre uma agêcia"/>
      <AtendimentoCard icon={FaHeadset } tipo="Central de atendimento" specbtn="Fale Conosco"/>
      <AtendimentoCard icon={IoChatboxEllipsesOutline } tipo="Fale com um agente" specbtn="Conversar agora"/>
    </div>
            </div>
        </section>
    );
}