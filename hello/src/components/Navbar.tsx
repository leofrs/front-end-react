import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaWheelchair,
} from "react-icons/fa";

import logo from "../assets/Logo2.png";

export default function Navbar() {
  return (
    <nav className="w-full h-auto fixed top-0 z-[100px] border-b border-[#187867]">
      <div className="flex justify-around h-[40px] bg-[#187867] shadow-md shadow-black max-sm:flex-col  max-sm:items-center">
        <p className="flex items-center">
          <a
            href="https://wa.link/kd1ev6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white max-sm:hidden"
          >
            {" "}
            <FaWhatsapp />
            (83) 999593540
          </a>
        </p>
        <p className="flex items-center gap-3 text-white cursor-default max-sm:pb-1">
          <FaWheelchair />
          Aceitamos todos os idosos
        </p>
      </div>

      <div className="flex justify-around h-[80px] items-center w-full bg-white">
        <img src={logo} alt="Logo" className="h-full" />
        <ul className="flex gap-3">
          <li>
            <a
              href="#sobre"
              className="hover:border-b-2 hover:border-b-[#ff0000]"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#localizacao"
              className="hover:border-b-2 hover:border-b-[#ff0000]"
            >
              Localização
            </a>
          </li>
        </ul>

        <ul className="flex gap-3">
          <li>
            <a
              href="https://wa.link/kd1ev6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaWhatsapp size={20} color="green" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram size={20} color="magenta" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/casalar55/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebook size={20} color="blue" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
