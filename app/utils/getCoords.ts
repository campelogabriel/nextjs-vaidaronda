async function getCoords(endereco) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    endereco
  )}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const coordenadas = {
        lat: data[0].lat,
        lon: data[0].lon,
      };

      console.log(coordenadas);

      return coordenadas;
    } else {
      return new Error("Endereço não encontrado");
    }
  } catch (error) {
    return new Error("Erro de conexão");
  }
}

// Exemplo de uso
// console.log(getCoords("Praia de Copacabana"));

export default getCoords;
