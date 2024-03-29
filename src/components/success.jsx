import React from "react";

import { Close, Celebrate } from "../icons";

const Success = () => {
  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="bg-[#EFEFEF]  w-80 h-80 rounded-lg ">
        <div className=" flex items-end justify-end mr-4 mt-5 ">
          <Close />
        </div>
        <p className="font-Poppins font-semibold text-2xl leading-[36px] text-center mt-3">
          Your verification was successfull
        </p>
        <div className="flex flex-col justify-center items-center">
          <Celebrate className="w-[86px] h-[86px] " />
          <button className="w-36 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5 mx-auto mt-6">
            Let's ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
