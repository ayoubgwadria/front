import React, { useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle";

import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { GrMapLocation } from "react-icons/gr";
const lib = ["places"];
const mapContainerStyle = {
  width: "70vw",
  height: "100vh",
};
const center = {
  lat: 36.806496,
  lng: 10.181532,
};
const opt = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};
function Map({ lng, lat }) {
  const key = "AIzaSyAkRWLEOVHprtRqAjovScwqIAtNOZwHoM0";
  const [markerState, setMarkerState] = useState({
    lat: null,
    lng: null,
  });
  const mapClick = useCallback((event) => {
    console.log("event from the map", event);
    lng.current = event.latLng.lng();
    lat.current = event.latLng.lat();
    setMarkerState((prev) => {
      return {
        ...prev,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    });
  }, []);
  const mapRef = useRef();
  const OnMapload = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: lib,
  });
  if (loadError) return <> Error de map </>;
  if (!isLoaded) return <> ...loading map </>;
  return (
    <div>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={opt}
        onClick={mapClick}
        onLoad={OnMapload}
      >
        {markerState.lat && (
          <Marker
            key={markerState.lat}
            position={{ lat: markerState.lat, lng: markerState.lng }}
            icon={{
              url: "https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png",
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}

export default Map;
function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("position", position);
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <GrMapLocation size={20} />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 36.806496, lng: () => 10.181532 },
      radius: 100 * 1000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    console.log("address", address);
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };
  console.log("data is the ", data);
  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="chercher votre localisation"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => {
                console.log("entering map", place_id);
                return (
                  <div key={place_id} style={{ zIndex: "9999" }}>
                    <ComboboxOption key={place_id} value={description} />
                  </div>
                );
              })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
