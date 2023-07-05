import React, { useRef, useState } from "react";

const MapFormWithoutPlaces = () => {
  const [address, setAddress] = useState("");
  const [mapIframe, setMapIframe] = useState("");
  const inputRef = useRef(null);

  const handlePlaceSelect = (event) => {
    setAddress(event.target.value);
  };

  const handleGetMap = async () => {
    if (address) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${process.env.API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
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
        <label htmlFor='address'></label>
        <input
          style={{ width: "508px" }}
          type='text'
          name='address'
          id='address'
          ref={inputRef}
          value={address}
          onChange={handlePlaceSelect}
          placeholder='Dirección'
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

export default MapFormWithoutPlaces;
