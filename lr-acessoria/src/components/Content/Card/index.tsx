import { dados } from "../../../data";

const index = () => {
  return (
    <div className="w-full rounded overflow-hidden flex flex-wrap text-white justify-center">
      {dados.map((dados) => {
        const { id, nome, img, des } = dados;
        return (
          <div key={id} className="border rounded-lg m-2 max-w-[350px]">
            <img className="max-w-full" src={img} alt={nome} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{nome}</div>
              <p className="text-gray-700 text-base">{des}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
