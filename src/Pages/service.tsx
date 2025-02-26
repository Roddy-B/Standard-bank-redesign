import { Card } from "@/components/cards/page";
import { MdOutlineAccountBalance, MdCreditCard, MdDirectionsCar } from "react-icons/md";
import { IoHomeOutline, IoWalletSharp } from "react-icons/io5";
import { PiSuitcaseRolling } from "react-icons/pi";

export default function Servicos() {
    return (
        <section className=" bg-primaryb flex justify-center items-center py-28">
            <div className="w-[1216px] mx-auto">
                <div className="mb-8 flex flex-col justify-center items-center text-wrap py-4">
                    <p className="text-5xl font-medium mb-4 font-inter text-bluetext leading-6">
                        Serviços bancários adaptados às
                    </p>
                    <p className="text-5xl font-medium mb-4 font-inter text-bluetext leading-6">
                        suas necessidades
                    </p>
                    <p className="text-lg text-bluetext pt-2">Como podemos te ajudar?</p>
                </div>
                <div className=" flex justify-between mb-4">
                        <Card icon={MdOutlineAccountBalance} text="Conta Bancaria"/>
                        <Card icon={MdCreditCard} text="Cartões de crédito"/>
                        <Card icon={MdDirectionsCar} text="Empréstimos para Veículos"/>
                        <Card icon={IoHomeOutline} text="Empréstimos para habitação"/>
                        <Card icon={IoWalletSharp} text="Fazer pagamentos"/>
                        <Card icon={PiSuitcaseRolling} text="Fazer uma viagem"/>
                </div>
            </div>
        </section>
    );
}