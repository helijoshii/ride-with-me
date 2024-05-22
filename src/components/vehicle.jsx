import React from "react";
import { Rikshaw, Bike, Car } from "@/icons";
import { useNavigate } from "react-router-dom";


const Vehicle = ({ distance }) => {
  function bikeprice() {
    const distanceNumber = parseFloat(distance);
    const price = distanceNumber * 7;
    const formattedPrice = price.toFixed(2);
    return formattedPrice;
  }

  function rikshawprice() {
    const distanceNumber = parseFloat(distance);
    const price = distanceNumber * 10;
    const formattedPrice = price.toFixed(2);
    return formattedPrice;
  }
  function miniprice() {
    const distanceNumber = parseFloat(distance);
    const price = distanceNumber * 12;
    const formattedPrice = price.toFixed(2);
    return formattedPrice;
  }
  function premiumprice() {
    const distanceNumber = parseFloat(distance);
    const price = distanceNumber * 15;
    const formattedPrice = price.toFixed(2);
    return formattedPrice;
  }

  const navigate = useNavigate();
  const FetchDetails = () => {
    navigate("/fetchDetails");
  };

  return (
    <>
      <div className="mx-auto snap-y max-h-12">
        <div className="flex flex-col ">
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
            <p className="text-lg mt-2 pr-1">₹{bikeprice()}</p>
          </div>

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
            <p className="text-lg h-fit pr-1">₹ {rikshawprice()}</p>
          </div>

          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Car className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppinsmt-4">
                Mini
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Beat the traffic on a bike
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹ {miniprice()}</p>
          </div>

          <div className="vehicle-card flex justify-between py-4 hover:border-[#FF6C96]  border rounded-lg border-transparent transition duration-300 ease-in-out transform hover:scale-105">
            <Car className="w-24 pr-1" />
            <div className="w-4/5">
              <h3 className="text-sm font-medium leading-5 font-poppins mt-4">
                Premium car
              </h3>
              <p className="font-poppins text-xs font-normal leading-4">
                Spacious sedans, top drivers
              </p>
            </div>
            <p className="text-lg mt-2 pr-1">₹ {premiumprice()}</p>
          </div>
        </div>
      </div>
      <button className="w-full h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm mt-[430px] leading-5 mx-auto"  onClick={FetchDetails}>
        Book auto
      </button>
    </>
  );
};

export default Vehicle;