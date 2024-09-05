"use client";
import { Inter } from "next/font/google";
import MyChart from "../_components/_Dashboard/MyChart";
import cx from "classnames";
import { useRef } from "react";
import Image from "next/image";
import Sidebar from "../_components/_Dashboard/Sidebar";
const inter = Inter({ subsets: ["latin"] });

function Page() {
  const inputRef = useRef<any>(null);
  const data = [16, 18, 19, 20, 22, 22];
  const labels = ["00:00", "02:00", "04:00", "05:00", "06:00", "07:00"];

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-dashgrid h-max">
      <div>
        <div
          style={{ borderBottomWidth: 1 }}
          className="flex flex-col gap-4 items-center justify-center border-slate-200 p-8 md:justify-between md:flex-row"
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="font-bold text-3xl ">Janeiro 2024</h1>
            <p className="font-medium text-xl	">Quinta-Feira, Jan 4, 2024</p>
          </div>
          <input
            className="focus:outline-0 p-3 rounded-xl bg-gray-100 w-2/4 text-lg phone:text-2xl"
            type="text"
            placeholder="Procure uma Localização"
            ref={inputRef}
          />
        </div>
        <div
          className={cx(
            "flex flex-auto flex-col overflow-y-scroll  md:overflow-hidden pt-20 px-4 phone:px-8 pb-0 border-slate-200 gap-12",
            inter.className
          )}
        >
          <h1 className="font-semibold text-md sm:text-3xl self-start">
            Tempo Agora
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center pb-8">
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image alt="vento" width={50} height={50} src={"wind.svg"} />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800">
                  Velocidade do Vento
                </span>
                <span className="font-medium text-5xl">12 km/h</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={"arrow-down.svg"}
                />
                <span className=" text-2xl self-end  text-gray-500">
                  2 km/h
                </span>
              </div>
            </div>
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image
                  alt="cloud-rain"
                  width={50}
                  height={50}
                  src={"cloud-rain.svg"}
                />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800">Chances de Chuva</span>
                <span className="font-medium text-5xl">22%</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={"arrow-up.svg"}
                />
                <span className=" text-2xl self-end  text-gray-500">10%</span>
              </div>
            </div>
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image
                  alt="pressure"
                  width={50}
                  height={50}
                  src={"pressure.svg"}
                />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800">
                  Pressão Atmosférica
                </span>
                <span className="font-medium text-5xl">720 hpa</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={"arrow-up.svg"}
                />
                <span className=" text-2xl self-end  text-gray-500">
                  32 hpa
                </span>
              </div>
            </div>
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image
                  alt="uv-index"
                  width={50}
                  height={50}
                  src={"uv-index.svg"}
                />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800">Indice UV</span>
                <span className="font-medium text-5xl">2,3</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={"arrow-down.svg"}
                />
                <span className=" text-2xl self-end  text-gray-500">0,3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 pr-12 justify-center">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-md sm:text-3xl self-start">
              Temperatura Hoje
            </h1>
            <div className="relative flex gap-2 pb-3 items-center hover:cursor-pointer ">
              <div
                className="hidden *:top-8 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-200"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Temperatura do Ar
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-200"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Temperatura da Agua
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-200"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    License
                  </a>
                </div>
              </div>
              <p className="text-sky-800 text-base phone:text-2xl font-semibold">
                Temperatura
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1e40af"
                className="pt-1 size-6 phone:size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <MyChart data={data} labels={labels} />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Page;
