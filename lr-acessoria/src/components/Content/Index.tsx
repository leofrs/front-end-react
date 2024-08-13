import Card from "./Card/index";

const Index = () => {
  return (
    <main className="text-white">
      <h4 className="text-xl font-bold text-center my-6">
        Aqui nos oferecemos os serguintes serviços para você e sua empresa
      </h4>
      <Card />
      <section className="max-w-[1280px] h-[350px] mt-6 bg-white text-black flex flex-col items-center justify-center text-center">
        <div className="border border-black rounded-lg max-w-[1080px] p-6">
          <h4 className="text-xl font-bold mb-6">
            Porque você deve escolher a LR ?
          </h4>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            repellendus voluptatum nam nobis, maiores eos repellat reiciendis
            rem perspiciatis officiis dolorum. Alias aperiam ad explicabo
            incidunt quia, esse iusto nihil.
          </p>
          <p className="text-xl font-bold ">Entre em contato</p>
          <div className="p-3 flex justify-center gap-6">
            <button className="border border-red-500 p-2 rounded-lg">
              Telefone
            </button>
            <button className="border border-red-500 p-2 rounded-lg">
              Email
            </button>
            <button className="border border-red-500 p-2 rounded-lg">
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
