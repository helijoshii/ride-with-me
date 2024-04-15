import React from "react";
import { Rikshaw, Bike, Car } from "@/icons";
const Vehicle = () => {
  return (
    <>
      <div className="mx-auto py-8">
        <div className="flex flex-col">
          <div className="vehicle-card flex justify-between py-4">
            <Rikshaw className="w-24 justify-start pr-1" />
            <div className="w-4/5">
              <h3 className="text-xl font-semibold h-fit">Auto</h3>
              <p className="font-poppins text-xs font-normal leading-4">Get autos at your doorstep</p>
            </div>
            <p className="text-lg h-fit">₹123</p>
          </div>

          <div className="vehicle-card flex justify-between py-4">
            <Car className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-xl font-semibold mt-4">Car</h3>
              <p className="font-poppins text-xs font-normal leading-4">Beat the traffic on a bike</p>
            </div>
            <p className="text-lg mt-2">₹123</p>
          </div>

          <div className="vehicle-card flex justify-between py-4">
            <Bike className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-xl font-semibold mt-4">Car</h3>
              <p className="font-poppins text-xs font-normal leading-4">Spacious sedans, top drivers</p>
            </div>
            <p className="text-lg mt-2">₹123</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
