import convertorName from "@/app/utils/convertorName";

function BoxInfo({ setActiveDropView, setDropView, dropView, activeDropView }) {
  return (
    <div
      onMouseOver={() => setActiveDropView(true)}
      onMouseLeave={() => setActiveDropView(false)}
      className="relative flex gap-2 pb-3 items-center hover:cursor-pointer"
    >
      {activeDropView && (
        <div
          className=" *:top-8 absolute right-0 z-10 mt-60 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div>
            <a
              onClick={() => setDropView("temp_c")}
              href="#"
              className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 font-semibold"
              role="menuitem"
              id="menu-item-0"
            >
              Temperatura
            </a>
            <a
              onClick={() => setDropView("humidity")}
              href="#"
              className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 font-semibold"
              role="menuitem"
              id="menu-item-1"
            >
              Umidade do Ar
            </a>
            <a
              onClick={() => setDropView("precip_mm")}
              href="#"
              className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 font-semibold"
              role="menuitem"
              id="menu-item-2"
            >
              Precipitação (mm)
            </a>
            <a
              onClick={() => setDropView("uv")}
              href="#"
              className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 font-semibold"
              role="menuitem"
              id="menu-item-3"
            >
              Índice UV
            </a>
          </div>
        </div>
      )}
      <p className="text-sky-800 text-base phone:text-2xl font-semibold">
        {convertorName(dropView)}
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
  );
}

export default BoxInfo;
