const extraerLatLng = (url) => {
  const regex = /\/@(-?\d+\.\d+),(-?\d+\.\d+)/;

  const match = url.match(regex);

  if (match) {
    const lat = match[1];
    const lng = match[2];

    console.log("Latitud:", lat);
    console.log("Longitud:", lng);
    return {lat, lng};
  } else {
    console.log("No se encontró latitud y longitud en la URL");
  }
  
};

export default extraerLatLng;
