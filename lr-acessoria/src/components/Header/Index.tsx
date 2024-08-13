import Banner from "./Banner/Index";

const Index = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="relative z-10 text-white flex justify-center items-center h-[730px]">
        <div className="max-w-[450px] max-h-[550px] border rounded-xl p-6 flex flex-col justify-center w-full items-center">
          <h1>Seja vem vindo a LR - Acessoria em comercio exterior</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea et
            maxime at, illum culpa libero, eligendi quisquam voluptatibus
            numquam, laborum corrupti quaerat nostrum nihil labore tenetur modi
            fuga minima dolore!
          </p>
          <br />
          <button className="transition-transform duration-300 transform hover:scale-110 bg-[#AB5421] hover:bg-[#AB5421] text-white font-bold py-2 px-4 rounded">
            Descubra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
