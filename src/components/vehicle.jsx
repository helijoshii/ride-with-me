import React from "react";
import { Rikshaw, Bike, Car } from "@/icons";
const Vehicle = () => {
  return (
    <>
      <div className="mx-auto snap-y max-h-12">
        <div className="flex flex-col ">
          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Rikshaw className="w-24 justify-start pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppins h-fit">
                Auto
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Get autos at your doorstep
              </p>
            </div>
            <p className="text-lg h-fit pr-1">₹123</p>
          </div>

          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Car className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppinsmt-4">
                Car
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Beat the traffic on a bike
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹123</p>
          </div>

          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Bike className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppins mt-4">
                Bike
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Spacious sedans, top drivers
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹123</p>
          </div>
          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Bike className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppins mt-4">
                Premium car
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Spacious sedans, top drivers
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹123</p>
          </div>
          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Bike className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppins mt-4">
                mini
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Spacious sedans, top drivers
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹123</p>
          </div>
        </div>
      </div>
      <button className="w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm mt-[550px] leading-5 mx-auto">Book auto</button>
    </>
  );
};

export default Vehicle;
