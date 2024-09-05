import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="flex justify-between gap-24 flex-col px-12 p-8 bg-gradient-to-r from-blue-950 to-cyan-950 backdrop-opacity-80 ">
      <div className="flex gap-12 items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-slate-100 font-semibold">
            Praia de Copacabana
          </h1>
          <p className="text-xl text-gray-200 font-medium">
            Rio de Janeiro, Brasil
          </p>
        </div>
        <p className="text-2xl text-slate-100 font-medium self-center">
          08:54 AM
        </p>
      </div>
      <div className="flex gap-8 flex-col text-slate-50 py-12 border-b-2 border-gray-400 border-opacity-40">
        <span className="text-2xl font-medium">Nuvem Desenho</span>
        <div className="flex items-center justify-between ">
          <h1 className="text-8xl font-medium">20º C</h1>
          <p className="text-3xl font-medium">Nublado</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 text-slate-50">
        <h1 className="text-3xl font-semibold ">Chances de Chuva</h1>
        <div className="flex items-center gap-3 justify-between">
          <p>7 PM</p>
          <div className="w-3/4 bg-sky-900 border-opacity-40 relative rounded-full py-4">
            <div className="top-0 left-0 w-2/4 bg-indigo-200 bg-opacity-70 absolute rounded-full py-4"></div>
          </div>
          <p>43%</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <p>7 PM</p>
          <div className="w-3/4 bg-sky-900 border-opacity-40 relative rounded-full py-4">
            <div className="top-0 left-0 w-2/4  bg-indigo-200 bg-opacity-70 absolute rounded-full py-4"></div>
          </div>
          <p>43%</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <p>7 PM</p>
          <div className="w-3/4 bg-sky-900 border-opacity-40 relative rounded-full py-4">
            <div className="top-0 left-0 w-2/4  bg-indigo-200 bg-opacity-70 absolute rounded-full py-4"></div>
          </div>
          <p>43%</p>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <p>7 PM</p>
          <div className="w-3/4 bg-sky-900 border-opacity-40 relative rounded-full py-4">
            <div className="top-0 left-0 w-2/4 bg-indigo-200 bg-opacity-70 absolute rounded-full py-4"></div>
          </div>
          <p>43%</p>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-8 text-slate-50 ">
        <h1 className="text-3xl font-semibold col-span-2">
          Nascer e Por do Sol
        </h1>
        <div className="flex border-2 border-blue-950 border-opacity-50 rounded-xl justify-between gap-12 p-4 bg-white bg-opacity-15 items-center">
          <Image alt="sun" src="/sun.svg" width={50} height={50} />
          <div className="flex flex-col gap-2 flex-grow justify-between  items-start">
            <p className="text-gray-300 font-medium">Nascer</p>
            <p className="font-semibold text-2xl">05:54 AM</p>
          </div>
          <p>16 horas atrás</p>
        </div>
        <div className="flex border-2 border-blue-950 border-opacity-50 rounded-xl justify-between gap-12 p-4 bg-white bg-opacity-15 items-center">
          <Image alt="sun" src="/sunset.svg" width={50} height={50} />
          <div className="flex flex-col gap-2 flex-grow justify-between  items-start">
            <p className="text-gray-300 font-medium">Por</p>
            <p className="font-semibold text-2xl">06:04 PM</p>
          </div>
          <p>Em 5 horas</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
