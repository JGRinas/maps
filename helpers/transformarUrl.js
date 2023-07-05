const transformGoogleMapsUrl = (url) => {
    const coordinatesRegex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const placeIdRegex = /!1s([^:!]+)(?::([^:!]+))?/;
    const timestamp = Date.now();

    const [ lat, lng] = coordinatesRegex.exec(url);
    const [ placeId, placeName] = placeIdRegex.exec(url);

    const transformedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(placeId)}%3A${encodeURIComponent(placeName)}!5e0!3m2!1ses!2sus!4v${timestamp}!5m2!1ses!2sus`;

    return transformedUrl;
  };
export default transformGoogleMapsUrl