import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-[400px]">
      <div className="w-full h-[300px] flex justify-center items-center bg-[#60CDBD] max-sm:px-10">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-center text-3xl cursor-default">
            O seu melhor conforto na Casa Lar São Judas Tadeu
          </h3>
          <a
            href="https://wa.link/kd1ev6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded-md p-5 mt-16 hover:bg-[#187867] hover:text-white shadow-xl shadow-black hover:border-white"
          >
            Entre em contato
          </a>
        </div>
      </div>

      <div
        id="localizacao"
        className="w-full h-[50px] flex justify-evenly items-center bg-black max-sm:flex-col gap-3 max-sm:h-[80px]"
      >
        <p className="text-center text-xl cursor-default text-white">
          Rua: Padre Cornelio de Farias N°230
        </p>
        <p className="text-center text-xl cursor-default text-white">
          Remígio-PB
        </p>
      </div>

      <div className="w-full h-[50px] bg-black flex justify-center">
        <p className="flex items-center gap-2 text-white cursor-default">
          <FaRegCopyright /> Leonardo Rodrigues -{" "}
          <a
            href="https://www.linkedin.com/in/leofrs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#187867]"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
