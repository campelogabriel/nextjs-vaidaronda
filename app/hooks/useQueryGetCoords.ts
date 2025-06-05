import { useQuery } from "@tanstack/react-query";
import getCoords from "../utils/getCoords";

export default function useQueryGetCoords(endereco) {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["coords"],
    queryFn: async () => await getCoords(endereco),
  });

  return { data, isError, isLoading, refetch };
}
