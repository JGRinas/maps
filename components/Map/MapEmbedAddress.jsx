import React, { useState } from "react";

const MapEmbedAddress = () => {
  const [address, setAddress] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleOnChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIframeUrl(
      `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
        address
      )}&key=${process.env.API_KEY}`
    );
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="addres">Ingrese su dirección</label>
        <br />
        <input
          style={{ width: "508px" }}
          type='text'
          name='addres'
          id='addres'
          placeholder='Dirección'
          onChange={handleOnChange}
        />
        <button type='submit'>Obtener mapa</button>
      </form>
      {iframeUrl && (
        <iframe
          src={iframeUrl}
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

export default MapEmbedAddress;
