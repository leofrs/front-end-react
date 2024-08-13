import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";

export default function CardImages() {
  return (
    <div className="w-full grid grid-cols-3 mt-5 max-sm:grid-cols-1 gap-2">
      <div className="max-w-sm h-[300px] ">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image1}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>

      <div className="max-w-sm h-[300px] ">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image2}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>

      <div className="max-w-sm h-[300px]">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image3}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>

      <div className="max-w-sm h-[300px] ">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image4}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>

      <div className="max-w-sm h-[300px] ">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image5}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>

      <div className="max-w-sm h-[300px] ">
        <a
          href="https://www.instagram.com/casalarsaojudas?igsh=MTA0NzA3b2U1ODBnbA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image6}
            alt="Imagem do insta aqui"
            className="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
