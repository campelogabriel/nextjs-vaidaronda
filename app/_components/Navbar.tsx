"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import Dropview from "../_components/_Dashboard/Dropview";

function Navbar() {
  const pathName = usePathname();
  return (
    <div className="p-8 flex items-center lg:flex-col md:flex md:flex-row bg-sky-800 phone:bg-gray-100	 backdrop-opacity-90 justify-between">
      <h1 className="text-gray-100 phone:text-sky-800 font-semibold">
        VaiDarPraia?
      </h1>
      <ul className="hidden font-medium lg:pt-24 lg:flex-grow  phone:flex flex-row lg:flex-col  md:flex md:flex-row gap-8">
        <Link
          href="/dashboard"
          className={cx(
            "flex	border-b-2 gap-8 items-center p-4 hover:md:bg-slate-200",
            pathName == "/dashboard" ? "border-sky-800" : "border-transparent"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathName == "/dashboard" ? "#075985" : "#52525b"}
            className="size-8"
          >
            <path
              stroke-linknecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span
            className={cx(
              "hidden lg:block ",
              pathName == "/dashboard" ? "text-sky-800 " : "text-gray-500"
            )}
          >
            Dashboard
          </span>
        </Link>
        <Link
          href="/praia"
          className={cx(
            "flex border-b-2 gap-8 items-center p-4 hover:md:bg-slate-200",
            pathName == "/praia" ? "border-sky-800" : "border-transparent"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathName == "/praia" ? "#075985" : "#52525b"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
          <span
            className={cx(
              "hidden lg:block ",
              pathName == "/praia" ? "text-sky-800 " : "text-gray-500"
            )}
          >
            Praia
          </span>
        </Link>
        <Link
          href="/localsalvo"
          className={cx(
            "flex border-b-2 gap-8 items-center p-4 hover:md:bg-slate-200",
            pathName == "/localsalvo" ? "border-sky-800" : "border-transparent"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathName == "/localsalvo" ? "#075985" : "#52525b"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span
            className={cx(
              "hidden lg:block ",
              pathName == "/localsalvo" ? "text-sky-800 " : "text-gray-500"
            )}
          >
            Locais Salvos
          </span>
        </Link>
        <Link
          href="/calendario"
          className={cx(
            "flex border-b-2 gap-8 items-center p-4 hover:md:bg-slate-200",
            pathName == "/calendario" ? "border-sky-800" : "border-transparent"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={pathName == "/calendario" ? "#075985" : "#52525b"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>

          <span
            className={cx(
              "hidden lg:block ",
              pathName == "/calendario" ? "text-sky-800 " : "text-gray-500"
            )}
          >
            Calendário
          </span>
        </Link>
        <Link
          href="/configuracoes"
          className={cx(
            "phone:flex hidden border-b-2 gap-8 items-center p-4 hover:md:bg-slate-200",
            pathName == "/configuracoes"
              ? "border-sky-800"
              : "border-transparent"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathName == "/configuracoes" ? "#075985" : "#52525b"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span
            className={cx(
              "hidden lg:block",
              pathName == "/configuracoes" ? "text-sky-800  " : "text-gray-500"
            )}
          >
            Configurações
          </span>
        </Link>
      </ul>

      <div className="phone:hidden block">
        <Dropview />
      </div>
    </div>
  );
}

export default Navbar;
