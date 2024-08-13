import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function IconsRedesSociais() {
  return (
    <div className="w-auto h-auto fixed bottom-3 right-2 bg-white rounded-md">
      <ul className="flex justify-center gap-5">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} color="green" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaInstagram size={40} color="magenta" />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaFacebook size={40} color="blue" />
          </a>
        </li>
      </ul>
    </div>
  );
}
