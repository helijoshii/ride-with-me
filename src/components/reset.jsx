import React from "react";
import { MailIcon } from "../icons";
const Reset = () => {
  return (
    <div className="bg-blue-200 h-screen m-0 relative ">
      <div className="bg-pink-100 h-screen w-[360px] absolute left-6 top-4">
        <div className="pt-[65px] px-4 text-left">
          <p className="font-Poppins font-semibold text-3xl leading-[48px] text-black ">
            Reset
          </p>
          <p className="text-sm leading-5 font-normal font-Poppins text-[#BDBDBD] max-w-72">
            Don't worry! It occurs. Please enter the email address link with
            your account
          </p>
        </div>
        <div className="pt-16 relative">
          <input
            type="email"
            class="border border-[#9E9E9E] w-80 h-12 rounded-lg pl-10 py-3 placeholder:font-Poppins placeholder:font-normal placeholder:text-sm"
            placeholder="Email"
          />
          <MailIcon />
        </div>

        <div className="pt-7">
          <button class="w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-Poppins font-semibold text-sm leading-5 ">
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
