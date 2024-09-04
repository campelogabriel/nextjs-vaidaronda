import React from "react";

function Metricas() {
  return (
    <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-6 justify-between items-center shadow-md">
      <div className="text-blue-700 font-semibold">Logo</div>
      <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
        <span className="text-lg text-gray-800">Chance de Chuva</span>
        <span className="font-medium text-5xl">24%</span>
      </div>
      <span className=" text-2xl self-end pb-3 text-gray-800">1 km/h</span>
    </div>
  );
}

export default Metricas;
