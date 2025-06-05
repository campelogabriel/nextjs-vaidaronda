"use client";
import { Inter } from "next/font/google";
import MyChart from "../_components/_Dashboard/MyChart";
import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Sidebar from "../_components/_Dashboard/Sidebar";
import useQueryGetPraiaWeather from "../hooks/useQueryGetPraiaWeather";
import Skeleton from "../_components/Skeleton";
import getMonthByNumber from "../utils/getMonthByNumber";
import getDayByNumber from "../utils/getDayByNumber";
import convertorName from "../utils/convertorName";
import getArrowUp from "../utils/getArrowUp";
import BoxInfo from "../_components/_Dashboard/BoxInfo";
const inter = Inter({ subsets: ["latin"] });

function Page() {
  const [text, setText] = useState("");
  const { data, isError, isLoading } = useQueryGetPraiaWeather();
  const dropRef = useRef<any>();
  const [dropView, setDropView] = useState("temp_c");
  const [activeDropView, setActiveDropView] = useState(false);

  if (!data) return;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-dashgrid h-max overflow-y-scroll h-screen">
      <div className="overflow-y-visible">
        <div
          style={{ borderBottomWidth: 1 }}
          className="flex flex-col gap-4 items-center justify-between border-slate-200 p-8 md:justify-between md:flex-row"
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="font-bold text-3xl ">
              {getMonthByNumber(new Date().getMonth())}{" "}
              {String(new Date().getFullYear())}
            </h1>
            <p className="font-medium text-xl	">
              {String(getDayByNumber(new Date().getDay()))},{" "}
              {getMonthByNumber(new Date().getMonth())?.slice(0, 3)}{" "}
              {String(new Date().getDate())}, {String(new Date().getFullYear())}
            </p>
          </div>
          <div className="flex flex-auto justify-end gap-2">
            <input
              className="focus:outline-0 p-3 rounded-xl bg-gray-100 w-2/4 text-lg phone:text-2xl"
              type="text"
              placeholder="Procure uma Praia"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="p-4 bg-gray-100 text-lg rounded-xl text-black font-medium">
              <Image alt="search" src={"/search.svg"} width={20} height={20} />
            </button>
          </div>
        </div>
        <div
          className={cx(
            "flex flex-auto flex-col overflow-y-scroll  md:overflow-hidden pt-20 px-4 phone:px-8 pb-0 border-slate-200 gap-12",
            inter.className
          )}
        >
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-gray-900 flex gap-4 justify-center items-center text-md sm:text-2xl self-start">
              Clima Agora e Antes
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-8 animate-pulse"
              fill="#ff0000"
            >
              <path
                fillRule="evenodd"
                d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center pb-8">
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image alt="vento" width={50} height={50} src={"wind.svg"} />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800">
                  Velocidade do Vento
                </span>
                <span className="font-medium text-5xl">
                  {Math.trunc(data.current.wind_kph)} km/h
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={"arrow-down.svg"}
                />
                <span className=" text-2xl self-end  text-gray-500">
                  {Math.trunc(
                    data.forecast.forecastday[0].hour[new Date().getHours() - 1]
                      .wind_kph
                  )}
                  km/h
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
                <span className="font-medium text-5xl">
                  {
                    data.forecast.forecastday[0].hour[new Date().getHours()]
                      .chance_of_rain
                  }
                  %
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={
                    getArrowUp(
                      data.forecast.forecastday[0].hour[
                        new Date().getHours() - 1
                      ].chance_of_rain,
                      data.forecast.forecastday[0].hour[new Date().getHours()]
                        .chance_of_rain
                    )
                      ? "arrow-up.svg"
                      : "arrow-down.svg"
                  }
                />
                <span className=" text-2xl self-end  text-gray-500">
                  {
                    data.forecast.forecastday[0].hour[new Date().getHours() - 1]
                      .chance_of_rain
                  }
                  %
                </span>
              </div>
            </div>
            <div className="hover:bg-slate-100 hover:transition-all hover:scale-105 bg-slate-50 p-8 rounded-xl grid grid-cols-4 gap-0 justify-between items-center shadow-md">
              <div className="text-blue-700 font-semibold">
                <Image
                  alt="humidity"
                  width={50}
                  height={50}
                  src={"humidity.svg"}
                />
              </div>
              <div className="col-span-2 justify-self-start flex flex-col gap-2 items-start">
                <span className="text-lg text-gray-800 ">Umidade do Ar</span>
                <span className="font-medium text-5xl">
                  {data.current.humidity}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={
                    getArrowUp(
                      data.forecast.forecastday[0].hour[
                        new Date().getHours() - 1
                      ].humidity,
                      data.forecast.forecastday[0].hour[new Date().getHours()]
                        .humidity
                    )
                      ? "arrow-up.svg"
                      : "arrow-down.svg"
                  }
                />
                <span className=" text-2xl self-end  text-gray-500">
                  {
                    data.forecast.forecastday[0].hour[new Date().getHours() - 1]
                      .humidity
                  }
                  %
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
                <span className="font-medium text-5xl">{data.current.uv}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  alt="arrow"
                  width={20}
                  height={20}
                  src={
                    getArrowUp(
                      data.forecast.forecastday[0].hour[
                        new Date().getHours() - 1
                      ].uv,
                      data.forecast.forecastday[0].hour[new Date().getHours()]
                        .uv
                    )
                      ? "arrow-up.svg"
                      : "arrow-down.svg"
                  }
                />
                <span className=" text-2xl self-end  text-gray-500">
                  {
                    data.forecast.forecastday[0].hour[new Date().getHours() - 1]
                      .uv
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 pr-12 justify-center">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-md sm:text-3xl self-start">
              {convertorName(dropView)} Hoje
            </h1>

            <BoxInfo
              dropView={dropView}
              setActiveDropView={setActiveDropView}
              setDropView={setDropView}
              activeDropView={activeDropView}
            />
          </div>
          <MyChart
            data={data.forecast.forecastday[0].hour
              .slice([new Date().getHours()])
              .map((hour) => Math.trunc(hour[dropView]))}
            labels={data.forecast.forecastday[0].hour
              .slice([new Date().getHours()])
              .map(
                (hour) =>
                  `${String(new Date(hour.time).getHours()).padStart(
                    2,
                    "0"
                  )}:00`
              )}
          />
        </div>
      </div>
      <Sidebar praia={data} />
    </div>
  );
}

export default Page;
