import Image from "next/image";

function CardFavorite() {
  return (
    <div
      className="bg-white border-l-2 border-gray-100 flex flex-col gap-8
    absolute top-0 right-0 z-50 py-5 px-10 h-full "
    >
      <h1 className="text-4xl text-gray-800 font-bold">Praias Favoritas</h1>
      <p className="text-xl text-gray-500 font-semibold">
        Coleção de praias favoritas pelo Brasil
      </p>
      <div className="p-4 border rounded-lg border-gray-200 bg-white shadow-md flex flex-col gap-6">
        <Image alt="praia" src={"/copa.png"} width={240} height={240} />
        <p className="text-2xl font-semibold">Praia de Copacabana</p>
      </div>
    </div>
  );
}

export default CardFavorite;
