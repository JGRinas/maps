import React, { useRef, useState } from 'react';
import Script from 'next/script';
import Autocomplete from "react-google-autocomplete";

const MapForm = () => {
  const [address, setAddress] = useState('');
  const [mapIframe, setMapIframe] = useState('');
  const inputRef = useRef(null);

  const handlePlaceSelect = (place) => {
    if (place && place.formatted_address) {
      setAddress(place.formatted_address);
    }
  };

  const handleGetMap = async () => {

    if (address) {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=APIKEY`);
        if (response.ok) {
          const data = await response.json();
          const location = data.results[0].geometry.location;
          const lat = location.lat;
          const lng = location.lng;
    
          const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.10087093248056!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEzJzEyLjkiTiAxMjLCsDQ3JzUxLjAiVw!5e0!3m2!1sen!2sus!4v1626940768587!5m2!1sen!2sus`;
    
          setMapIframe(mapUrl);
        } else {
          throw new Error('Error al obtener las coordenadas de la dirección');
        }
      } catch (error) {
        console.error(error);
        
      }
    } else {
      console.error('Dirección no especificada');
     
    }
  };
  

  return (
    <div>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=APIKEY&libraries=places`}
        strategy="beforeInteractive"
      />
      <Autocomplete
        apiKey="APIKEY"
        onPlaceSelected={handlePlaceSelect}
        inputProps={{ ref: inputRef }}
     />
      <button onClick={handleGetMap}>Obtener mapa</button>
      {mapIframe && <iframe src={mapIframe} width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>}
    </div>
  );
};

export default MapForm;
