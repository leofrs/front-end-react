import {
  FaUserDoctor,
  FaWhatsapp,
  FaWheelchair,
  FaTree,
  FaHandshake,
} from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";

export default function CardHome() {
  return (
    <div className="w-full overflow-hidden shadow-lg grid grid-cols-4 gap-3 mt-5 max-sm:grid-cols-2">
      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#621750] to-[#882072] ">
        <FaUserDoctor size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Especialistas
        </div>
        <p className="text-base text-center text-white">
          Procuramos nos especializar cada vez mais para os nossos idosos!
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#187867] to-[#219b84] ">
        <FaWhatsapp size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Disponível 24/7
        </div>
        <p className="text-white text-base text-center">
          Disponíveis para atender a qualquer momento. Hospedagem imediata!
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#E73254] to-[#E94C3B] ">
        <FaWheelchair size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Cadeirantes
        </div>
        <p className="text-white text-base text-center">
          Atendemos todos os graus de dependência, ou seja, 1, 2 ou 3. Conte
          conosco.
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#F17E1F] to-[#F9AD09] ">
        <HiUserGroup size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Técnicos e Cuidadores
        </div>
        <p className="text-white text-base text-center">
          Contratamos apenas 1 em cada 25 candidatos. Grupo seleto de
          colaboradores.
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#75AA42] to-[#8BC156]">
        <IoDiamondOutline size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Excelência
        </div>
        <p className="text-white text-base text-center">
          Trabalhamos para manter os nossos clientes sempre muito satisfeitos.
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#255281] to-[#0C7D99]">
        <MdEmojiPeople size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Atividades
        </div>
        <p className="text-white text-base text-center">
          Diversas atividades como dança, jogos, arte, música e outras!
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#43B0BB] to-[#86CACF]">
        <FaTree size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Jardinagem
        </div>
        <p className="text-white text-base text-center">
          Jardinagem para o combate ao sedentarismo e a depressão.
        </p>
      </div>

      <div className="max-w-sm h-[300px] px-6 py-4  rounded-lg flex flex-col justify-center items-center cursor-default bg-gradient-to-r from-[#25928E] to-[#2FB1AC] ">
        <FaHandshake size={50} color="white" />
        <div className="font-bold text-xl mb-2 text-center text-white">
          Contrato legal
        </div>
        <p className="text-white text-base text-center">
          Nenhuma pegadinha ou cláusula abusiva! 100% transparente!
        </p>
      </div>
    </div>
  );
}
