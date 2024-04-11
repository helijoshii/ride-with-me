/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Map from "./map";
import { Drawer } from "vaul";
import React from "react";

function App() {
  const [pickUp, setPickup] = useState([]);
  const [drop, setDrop] = useState([]);
  const [inputpickup, setinputpickup] = useState("");
  const [inputdrop, setinputdrop] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);
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
      <div>
        <Map pickUp={pickUp} drop={drop} />
        {/* <input
          type="text"
          value={inputpickup}
          onChange={(e) => setinputpickup(e.target.value)}
          className="border-2 border-black"
        />
        <input
          type="text"
          value={inputdrop}
          onChange={(e) => setinputdrop(e.target.value)}
          className="border-2 border-black"
        /> */}
        <button
          onClick={() => {
            getPickUp(inputpickup);
            getDropOff(inputdrop);
          }}
          className="p-2 bg-blue-500 text-white"
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
          className="p-2 bg-green-400 text-white"
        >
          Location
        </button>
      </div>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button>Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className={`bg-zinc-100 flex flex-col rounded-t-[10px]  ${
              isOpen ? "h-full" : "h-[15%]"
            }  mt-24 fixed bottom-0 left-0 right-0`}
          >
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8"
                onClick={() => setIsOpen(!isOpen)}
              />

              <div className="max-w-md mx-auto h-[-5px] px-4">
                <Drawer.Title className="font-medium mb-4">
                  <input
                    type="text"
                    className="border w-80 h-11 rounded-lg pl-5 pb-3 leading-5 text-sm mb-4 placeholder:font-poppins"
                    placeholder="Search destination"
                    required
                  />
                  <input
                    type="text"
                    className="border w-80 h-11 rounded-lg pl-5 pb-3 leading-5 text-sm place-content-center placeholder:font-poppins"
                    placeholder="Current location"
                    value={inputpickup}
                    required
                  />
                </Drawer.Title>
                <button
                  className="w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm mt-[200px] leading-5 mx-auto"
                  onClick={() => {
                    getPickUp(inputpickup);
                    getDropOff(inputdrop);
                  }}
                >
                  Confirnm location
                </button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export default App;
