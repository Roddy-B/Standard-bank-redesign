import { IconType } from "react-icons";
import Link from "next/link";

interface AtendimentoCardProps {
    icon?: IconType;
    tipo: string;
    specbtn: string;
}


export default function AtendimentoCard({icon: Icon,tipo,specbtn }: AtendimentoCardProps) {
    return (
        <div className="group">
            <div className="card w-96 h-[217px] bg-primaryc border-2 border-graycard rounded flex flex-col items-center justify-center transition-colors duration-300 group-hover:bg-bluebtn group-hover:text-white">
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col gap-4 items-center">
                        {Icon && ( <Icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-white" /> )}
                        <span className="font-inter font-normal text-graybody text-lg leading-lnL transition-colors duration-300 group-hover:text-white">
                        {tipo}
                        </span>
                    </div>
                    <Link href={``}>
                        <button className="bg-bluebtn w-[336px] h-14 rounded font-franklin text-base font-medium transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                        {specbtn}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}