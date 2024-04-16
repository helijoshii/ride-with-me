/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Map from "./map";
import { Drawer } from "vaul";
import React from "react";
import Vehicle from "./vehicle";
import { Currentloc } from "@/icons";
import * as turf from "@turf/turf";
function App() {
  const [pickUp, setPickup] = useState([]);
  const [drop, setDrop] = useState([]);
  const [inputpickup, setinputpickup] = useState("");
  const [inputdrop, setinputdrop] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [initDrawerOpen, setInitDrawerOpen] = React.useState(true);
  const [isList, setIsList] = React.useState(false);

  useEffect(() => {
    getPickUp();
    getDropOff();
  }, []);

  var from = turf.point([
    pickUp.length ? pickUp[0] : -75.343,
    pickUp.length ? pickUp[1] : 39.984,
  ]);
  var to = turf.point([
    drop.length ? drop[0] : -75.343,
    drop.length ? drop[1] : 39.984,
  ]);
  var options = { units: "kilometers" };
  var distance = turf.distance(from, to, options);
  console.log("dis", distance);

  




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
          className="p-2 bg-white absolute bottom-36 right-10 z-50"
        >
          {/* Location */}
          <Currentloc />
        </button>
      </div>
      <Drawer.Root open={initDrawerOpen} shouldScaleBackground modal={false}>
        <Drawer.Trigger asChild>
          <div></div>
          {/* <button>Open Drawer</button> */}
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className={`bg-zinc-100 flex flex-col rounded-t-[10px]  ${
              isOpen ? "h-full" : `h-[20%]`
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
                    className="border w-80 h-11 rounded-lg px-5 leading-5 text-sm mb-4 placeholder:font-poppins"
                    placeholder="Search destination"
                    required
                  />
                  <input
                    type="text"
                    className="border w-80 h-11 rounded-lg px-5 leading-5 text-sm place-content-center placeholder:font-poppins"
                    placeholder="Current location"
                    value={inputpickup}
                    required
                  />
                </Drawer.Title>
                {isList ? (
                  <Vehicle distance={distance}/>
                ) : (
                  <button
                    className={`w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm mt-[200px] leading-5 mx-auto `}
                    onClick={() => {
                      getPickUp(inputpickup);
                      getDropOff(inputdrop);
                      setIsList(true);
                    }}
                  >
                    Confirm location
                  </button>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export default App;
