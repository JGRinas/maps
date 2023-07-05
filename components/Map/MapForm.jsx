import React, { useRef, useState } from "react";
import DebouncedAutocomplete from "./DebouncedAutocomplete";

const MapForm = () => {
  const [address, setAddress] = useState("");
  const [mapIframe, setMapIframe] = useState("");
  const inputRef = useRef(null);

  const handlePlaceSelect = (place) => {
    console.log(place);
    if (place && place.formatted_address) {
      setAddress(place.formatted_address);
    }
  };

  const handleGetMap = async () => {
    console.log(address);
    if (address) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${process.env.API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const location = data.results[0].geometry.location;
          const lat = location.lat;
          const lng = location.lng;

          const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=${lat},${lng}&zoom=15`;

          setMapIframe(mapUrl);
        } else {
          throw new Error("Error al obtener las coordenadas de la dirección");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Dirección no especificada");
    }
  };

  return (
    <>
      <form>
        <DebouncedAutocomplete
          apiKey={process.env.API_KEY}
          onPlaceSelected={handlePlaceSelect}
          types={["(regions)"]}
          options={{
            types: ["address"],
            componentRestrictions: { country: "AR" },
            bounds: {
              north: -27.0, // Límites de latitud para la provincia
              south: -29.5,
              east: -56.0, // Límites de longitud para la provincia
              west: -59.0,
            },
          }}
          style={{width: 508}}
        />
        <button onClick={handleGetMap}>Obtener mapa</button>
      </form>
      {mapIframe && (
        <iframe
          src={mapIframe}
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      )}
    </>
  );
};

export default MapForm;
