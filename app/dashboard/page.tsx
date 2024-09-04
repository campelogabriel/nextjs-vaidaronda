import { Inter } from "next/font/google";
import Metricas from "../_components/_Dashboard/Metricas";
import MyChart from "../_components/_Dashboard/MyChart";
import cx from "classnames";
const inter = Inter({ subsets: ["latin"] });

function Page() {
  const data = [16, 18, 19, 20, 22, 22];
  const labels = ["00:00", "02:00", "04:00", "05:00", "06:00", "07:00"];

  return (
    <div className="flex flex-col justify-between h-max">
      <div
        style={{ borderBottomWidth: 1 }}
        className="flex flex-col gap-4 items-center justify-center border-slate-200 p-8 md:justify-between md:flex-row"
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-3xl ">Janeiro 2024</h1>
          <p className="font-medium text-xl	">Quinta-Feira, Jan 4, 2024</p>
        </div>
        <div
          style={{
            borderBottomWidth: 2,
          }}
          className="w-3/4 md:w-2/4 p-3 pr-4 sm:p-4 sm:pr-6 w-2/4 flex flex-row gap-12 border-gray-300 bg-gray-50 rounded-xl items-center space-between"
        >
          <input
            className="focus:outline-0 flex-grow bg-gray-50 w-32 text-lg phone:text-2xl"
            type="text"
            placeholder="Procure uma Localização"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#333"
            className="size-6 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
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
          <Metricas />
          <Metricas />
          <Metricas />
          <Metricas />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-8 pr-12 justify-center">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-md sm:text-3xl self-start">
            Temperatura Hoje
          </h1>
          <div className="relative flex gap-2 pb-3 items-center hover:cursor-pointer ">
            <div
              className="top-8 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none"
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
                  Account settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-200"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Support
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
            <p className="text-blue-800 text-base phone:text-2xl font-medium">
              Temperatura
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1e40af"
              className="pt-1 size-6 phone:size-8"
            >
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <MyChart data={data} labels={labels} />
      </div>
    </div>
  );
}

export default Page;
