/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Map from "./map";
import "../App.css";
function Search() {
  const [pickUp, setPickup] = useState([]);
  const [drop, setDrop] = useState([]);
  const [inputpickup, setinputpickup] = useState("");
  const [inputdrop, setinputdrop] = useState("");

  useEffect(() => {
    getPickUp();
    getDropOff();
  }, []);

  async function getPickUp(codinates) {
    const data = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${codinates}.json?` +
        new URLSearchParams({
          access_token: `pk.eyJ1IjoibWF5YW5rLTAiLCJhIjoiY2x1MmhweHRmMHRnZTJtcGRvZXd1dzdxaCJ9.Jv2qrYH63lMJsb_JNvixzA`,
          limit: 1,
        })
    );
    const jsonData = await data.json();
    console.log(">>", jsonData);
    setPickup(jsonData.features[0].center);
  }

  async function getDropOff(codinates) {
    const data = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${codinates}.json?` +
        new URLSearchParams({
          access_token: `pk.eyJ1IjoibWF5YW5rLTAiLCJhIjoiY2x1MmhweHRmMHRnZTJtcGRvZXd1dzdxaCJ9.Jv2qrYH63lMJsb_JNvixzA`,
          limit: 1,
        })
    );
    const jsonData = await data.json();
    setDrop(jsonData.features[0].center);
  }

  async function getLoc(latitude, longitude) {
    const locs = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?types=address&` +
        new URLSearchParams({
          access_token: `pk.eyJ1IjoibWF5YW5rLTAiLCJhIjoiY2x1MmhweHRmMHRnZTJtcGRvZXd1dzdxaCJ9.Jv2qrYH63lMJsb_JNvixzA`,
        })
    );
    const locsJson = await locs.json();
    console.log(locsJson);
    setinputpickup(locsJson.features[0].place_name);
  }

  return (
    <>
      <Map pickUp={pickUp} drop={drop} /> {/* Render Map component here */}
      <div>
        <input
          type="text"
          value={inputpickup}
          onChange={(e) => setinputpickup(e.target.value)}
        />
        <input
          type="text"
          value={inputdrop}
          onChange={(e) => setinputdrop(e.target.value)}
        />
        <button
          onClick={() => {
            getPickUp(inputpickup);
            getDropOff(inputdrop);
          }}
        >
          Confirm
        </button>

        <button
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setPickup([longitude, latitude]);
                setDrop([longitude, latitude]);
                getLoc(longitude, latitude);
              });
            } else {
              console.log("Geolocation is not supported by this browser.");
            }
          }}
        >
          Location
        </button>
      </div>
    </>
  );
}

export default Search;
