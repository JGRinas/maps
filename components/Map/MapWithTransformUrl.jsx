import React, { useState } from "react";
import transformGoogleMapsUrl from "../../helpers/transformarUrl";

const MapWithTransformUrl = () => {
  const [urlMaps, setUrlMaps] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleOnChange = (e) => {
    setUrlMaps(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIframeUrl(transformGoogleMapsUrl(urlMaps));
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

export default MapWithTransformUrl
