import React from "react";

const Verify = () => {
  return (
    <div className="mt-16 mx-4 font-Poppins ">
      <div className="pb-[42px]">
        <p className="font-semibold text-3xl leading-[48px] ">Verify</p>
        <p className="font-normal text-sm leading-5 text-[#A2A2A2]">
          Enter the code sent to 91xxxx xx897
        </p>
      </div>
      <div className="flex flex-row h-[72px] gap-4 justify-center">
        <input
          type="number"
          className="border w-[70px] flex justify-between  font-Poppins font-normal text-5xl leading-[72px] rounded-lg px-2 py-0 border-[#9E9E9E]"
          name=""
          id=""
        />
        <input
          type="number"
          className="border w-[70px] font-Poppins font-normal text-5xl leading-[72px] rounded-lg px-2 py-0 border-[#9E9E9E]"
          name=""
          id=""
        />
        <input
          type="number"
          className="border w-[70px] font-Poppins font-normal text-5xl leading-[72px] rounded-lg px-2 py-0 border-[#9E9E9E]"
          name=""
          id=""
        />
        <input
          type="number"
          className="border w-[70px] font-Poppins font-normal text-5xl leading-[72px] rounded-lg px-2 py-0 border-[#9E9E9E]"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-row justify-center">
        <button className="w-11/12 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5  mt-6 mx-auto">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Verify;
