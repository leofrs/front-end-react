import Banner from "./Banner";
import CardHome from "./Card";
import CardImages from "./CardImages";
import Footer from "./Footer";

import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";

export default function ContentHome() {
  return (
    <main id="sobre" className="w-ful h-auto border mt-[112px] ">
      <Banner image={Banner1} />

      <div className="flex flex-col h-[350px] justify-center items-center p-10 max-sm:h-full max-sm:w-full">
        <h2 className="text-center my-2 text-3xl">
          Casa de longa permanência na Paraíba
        </h2>
        <h5 className="text-center my-2 italic font-semibold">
          Uma casa de repouso que atenda com serviços adequados é um dos
          aspectos mais importantes!
        </h5>
        <p className="text-justify my-2 max-w-4xl">
          Fundada em Agosto de 2018 a{" "}
          <span className="text-[#187867] font-bold">
            Casa Lar São Judas Tadeu
          </span>{" "}
          oferece um único valor mensal para a moradia assistida. Esse valor
          inclui todos os serviços e produtos necessários para garantir a melhor
          qualidade de vida para os nossos residentes, como assistência médica,
          acompanhamento diário, atividades recreativas e alimentação
          balanceada, com o suporte de uma equipe multidisciplinar preparada
          para atender às necessidades individuais de cada residente.
        </p>
      </div>

      <div className="p-10 flex flex-col items-center">
        <h2 className="text-center text-3xl mb-5">
          Por que escolher a{" "}
          <span className="text-[#187867] font-bold">
            Casa Lar São Judas Tadeu?
          </span>
        </h2>
        <p className="text-center max-w-4xl">
          Estamos sempre comprometidos em estar ao seu lado, oferecendo serviços
          de excelência e apoio para você e sua família. Na casa lar, não
          parecemos uma ILPI, mas sim seu novo lar
        </p>
        <CardHome />
      </div>

      <Banner image={Banner2} />

      <div className="p-10">
        <h2 className="text-center text-3xl mb-3">
          Imagens falam mais que palavras
        </h2>
        <p className="italic font-semibold text-center text-sm">
          Clique em qualquer imagem e vá para a nossa página do instagram
        </p>

        <CardImages />
      </div>

      <Footer />
    </main>
  );
}
