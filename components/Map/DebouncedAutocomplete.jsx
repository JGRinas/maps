import React, { useRef, useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";

const DebouncedAutocomplete = ({ onPlaceSelected, ...rest }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimer, setDebouncedTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // Establece el tiempo de espera deseado (en milisegundos)

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const handlePlaceSelect = (place) => {
    setSearchTerm("");
    onPlaceSelected(place);
  };

  return (
    <>
      <label htmlFor=''>Ingrese su dirección</label>
      <br />
      <Autocomplete
        placeholder='Dirección'
        ref={inputRef}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onPlaceSelected={handlePlaceSelect}
        {...rest}
      />
    </>
  );
};

export default DebouncedAutocomplete;
