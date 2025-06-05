import Image from "next/image";

function MarAgitado() {
  return (
    <>
      <Image
        className="absolute -bottom-6  left-0 z-30 w-full DarkWaves brightness-75"
        alt="wave"
        src={"/waveAgitada1.svg"}
        width={200}
        height={10}
      />
      <Image
        className=" absolute bottom-0 left-0 z-30 w-full LightWaves brightness-75"
        alt="wave2"
        src={"/waveAgitada2.svg"}
        width={200}
        height={10}
      />
      <Image
        className="absolute -bottom-32 left-0 z-30 w-full WhiteWaves  brightness-75"
        alt="wave3"
        src={"/waveAgitada3.svg"}
        width={200}
        height={10}
      />
    </>
  );
}

export default MarAgitado;
