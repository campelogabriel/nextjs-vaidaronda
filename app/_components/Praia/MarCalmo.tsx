import Image from "next/image";

function MarCalmo() {
  return (
    <>
      <Image
        className=" absolute bottom-0 left-0 z-30 w-full DarkWaves brightness-75"
        alt="onda2"
        src={"/marCalmo2.svg"}
        width={200}
        height={10}
      />
      <Image
        className=" absolute -bottom-6 left-0 z-30 w-full LightWaves brightness-75"
        alt="onda1"
        src={"/marCalmo1.svg"}
        width={200}
        height={10}
      />
    </>
  );
}

export default MarCalmo;
