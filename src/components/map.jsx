/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";

const Map = ({ pickUp, drop }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWF5YW5rLTAiLCJhIjoiY2x1MmhweHRmMHRnZTJtcGRvZXd1dzdxaCJ9.Jv2qrYH63lMJsb_JNvixzA";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [22.89083188056462, 72.27103319903652],
      zoom: 5,
    });
    if (pickUp) {
      addMarkers(map, pickUp);
    }

    if (drop) {
      addMarkers(map, drop);
    }

    if (pickUp && drop) {
      map.fitBounds(
        [
          pickUp.length ? pickUp : [22.89083188056462, 72.27103319903652], // southwestern corner of the bounds
          drop.length ? drop : [23.0276, 72.5871], // southwestern corner of the bounds
        ],
        { duration: 1 }
      );
    }
  }, [pickUp, drop]);

  function addMarkers(map, pickUp) {
    const marker = new mapboxgl.Marker()
      .setLngLat(pickUp.length ? pickUp : [23.0276, 72.5871])
      .addTo(map);
  }

  return (
    <>
      <div id="map" style={{ width: "80vw", height: "80vh" }}></div>
    </>
  );
};

export default Map;
