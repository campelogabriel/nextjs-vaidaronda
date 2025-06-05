// app/praia/page.tsx
import Image from "next/image";
import MarAgitado from "../_components/Praia/MarAgitado";
import Chuva from "../_components/Praia/Chuva";
import MarCalmo from "../_components/Praia/MarCalmo";

function page() {
  return (
    <div className="relative h-full w-full ">
      <Image alt="stars" src={"/stars.jpg"} fill className="object-cover" />

      <Image
        alt="island"
        src={"/island.png"}
        className="absolute pb-72 xl:pb-80 brightness-75 z-10 left-1/2 -translate-x-1/2 translate-y-36"
        width={500}
        height={120}
      />
      <div className="absolute inset-0 flex flex-col justify-end items-center">
        {/* <MarCalmo /> */}
        <MarAgitado />
        <Chuva />
      </div>
    </div>
  );
}

export default page;
