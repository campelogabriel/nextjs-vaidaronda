import Image from "next/image";
import React from "react";
import dayjs from "dayjs";

function Sidebar({ praia }) {
  return (
    <div className=" flex justify-between flex-col px-12 p-8 bg-gradient-to-r from-blue-950 to-cyan-950 backdrop-opacity-80 ">
      <div className="flex-shrink flex gap-12 items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-slate-100 font-semibold">
            Praia de Copacabana
          </h1>
          <p className="text-xl text-gray-200 font-medium">
            Rio de Janeiro, Brasil
          </p>
        </div>
        <p className="text-2xl text-slate-100 font-medium self-center">
          {String(new Date().getHours()).padStart(2, "0")}:
          {String(new Date().getMinutes()).padStart(2, "0")}
        </p>
      </div>
      <div className="flex gap-8 flex-col text-slate-50 py-12 border-b-2 border-gray-400 border-opacity-40">
        <div className="flex items-center justify-start ">
          <Image
            alt="weather"
            width={60}
            height={80}
            src={`https:${praia.current.condition.icon}`}
          />
          <p className="text-2xl font-medium">{praia.current.condition.text}</p>
        </div>
        <h1 className="text-8xl font-medium">
          {Math.trunc(praia.current.temp_c)}º C
        </h1>
      </div>
      <div className="flex flex-col gap-8 text-slate-50">
        <h1 className="text-3xl font-semibold ">Chances de Chuva</h1>
        {[
          ...praia.forecast.forecastday[0].hour,
          ...praia.forecast.forecastday[1].hour,
        ]
          .slice(new Date().getHours() + 1)
          .slice(0, 5)
          .map((p, i) => {
            return (
              <div
                key={i}
                className=" w-full flex items-center gap-3 justify-between"
              >
                <p className="text-xl md:text-lg">
                  {String(new Date(p.time).getHours()).padStart(2, "0")}:00
                </p>
                <div className="flex-auto bg-sky-900 border-opacity-70 relative rounded-full py-4">
                  <div
                    style={{ width: `${p.chance_of_rain}%` }}
                    className="top-0 left-0  bg-indigo-200 bg-opacity-70 absolute rounded-full py-4"
                  ></div>
                </div>
                <p className="pl-4 text-xl md:text-lg">{p.chance_of_rain}%</p>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-8 text-slate-50 ">
        <h1 className="text-3xl font-semibold col-span-2">
          Nascer e Por do Sol
        </h1>
        <div className="flex border-2 border-blue-950 border-opacity-50 rounded-xl justify-between gap-12 p-4 bg-white bg-opacity-15 items-center">
          <div className="flex gap-8 items-center">
            <Image alt="sun" src="/sun.svg" width={50} height={50} />
            <p className="font-semibold text-2xl">
              {praia.forecast.forecastday[0].astro.sunrise}
            </p>
          </div>
        </div>
        <div className="flex border-2 border-blue-950 border-opacity-50 rounded-xl justify-between gap-12 p-4 bg-white bg-opacity-15 items-center">
          <div className="flex gap-8 items-center">
            <Image alt="sun" src="/sunset.svg" width={50} height={50} />
            <p className="font-semibold text-2xl">
              {praia.forecast.forecastday[0].astro.sunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
