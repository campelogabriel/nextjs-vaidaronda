import { useQuery } from "@tanstack/react-query";

export default function useQueryGetPraiaWeather() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["praia"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=a5fe6df8087746faa9c11421242908&q=-22.970722,-43.182365&lang=pt&days=2"
      );
      const data = await res.json();
      return data;
    },
  });

  return { data, isError, isLoading };
}
