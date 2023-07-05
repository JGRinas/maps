import React from "react";
import MapForm from "../components/Map/MapForm";
import MapEmbedAddress from "../components/Map/MapEmbedAddress";
import MapWithTransformUrl from "../components/Map/MapWithTransformUrl";
import MapWithUrlLocation from "../components/Map/MapWithUrlLocation";
import MapFormWithoutPlaces from "../components/Map/MapFormWithoutPlaces";

const Home = () => {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#333",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Api places y api geocoding</h2>
        <MapForm />
        <ul>
          <li>Es exacta</li>
          <li>Ayuda a los usuarios a encontrar direcciones</li>
          <li>Ambas api se pagan por uso</li>
        </ul>
        <br />

        <hr />
        <br />
        <h2>Api geocoding</h2>
        <MapFormWithoutPlaces />
        <ul>
          <li>Debe ingresar la ubicación exacta</li>
          <li>La api se paga por uso</li>
        </ul>
        <br />

        <hr />
        <br />
        <h2>Map embed con dirección</h2>
        <MapEmbedAddress />
        <ul>
          <li>Debe ingresar la ubicación exacta</li>
          <li>Es gratuita, pero necesita una API KEY de google</li>
        </ul>
        <br />

        <hr />
        <br />
        <h2>Obteniendo Location desde url</h2>
        <MapWithUrlLocation />
        <ul>
          <li>Debe ingresar una url valida de google maps</li>
          <li>Es gratuita, pero necesita una API KEY de google</li>
        </ul>
        <br />

        <hr />
        <br />
        <h2>Obteniendo informacion desde url</h2>
        <MapWithTransformUrl />
        <ul>
          <li>Debe ingresar una url valida de google maps</li>
          <li>Es gratuita, NO necesita una API KEY de google</li>
        </ul>
        <br />

        <hr />
        <br />
        <h2>Incrustando o usando página especializada</h2>
        <iframe
          src='https://www.embedmymap.com/'
          width='100%'
          height='700'
          scrolling='no'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
        <ul>
          <li>Es gratuito</li>
          <li>Se deben conocer los terminos de uso de la página</li>
          <li>Se debe indicar su uso</li>
        </ul>
        <br />
      </main>
    </>
  );
};

export default Home;
