import React, { useState } from "react";
import extraerLatLng from "../../helpers/extraerLatLng";

const MapWithUrlLocation = () => {
  const [urlMaps, setUrlMaps] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleOnChange = (e) => {
    setUrlMaps(e.target.value);
    console.log(urlMaps)
  };

  const handlePaste = (e) => {
    const pastedUrl = e.clipboardData.getData('text');
    setUrlMaps(pastedUrl);
    console.log(urlMaps)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(urlMaps)
    const { lat, lng } = extraerLatLng(urlMaps);

    setIframeUrl(`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=${lat},${lng}&zoom=18.5`)
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='url'>Ingrese url</label>
        <br />
        <input
          style={{ width: "508px" }}
          type='text'
          name='url'
          id='url'
          placeholder='URL'
          onPaste={handlePaste}
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

export default MapWithUrlLocation
