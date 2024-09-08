"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CardFavorite from "../_components/Favorites/CardFavorite";
import { style } from "../utils/mapStyles";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

function page() {
  return (
    <>
      <CardFavorite />
      <LoadScript googleMapsApiKey="AIzaSyDBL82YIr-EE0FMMDgiRrU47bZLggtWUWk">
        <GoogleMap
          options={{
            styles: style,
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Exemplo de um marcador */}
          <Marker icon={"/location.png"} position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default page;
