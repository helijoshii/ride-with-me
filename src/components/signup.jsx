import React from "react";
import { Phone, MailIcon, Name } from "../icons";

const SignUp = () => {
  return (
    <>
      <div className="mt-16 mx-4 mb-6">
        <div className="font-Poppins mb-10 ">
          <p className="font-semibold text-3xl leading-[48px]">Sign Up</p>
          <p className="font-normal text-sm leading-5 text-[#A2A2A2]">
            Please enter your details
          </p>
        </div>
        <form className="font-Poppins border-[#9E9E9E] placeholder:font-normal placeholder:text-sm placeholder:leading-5 flex flex-col gap-3">
          <div>
            <Name className="w-4 h-4 absolute left-7 top-[185px]" />
            <input
              type="text"
              className="border w-full h-11 rounded-md pl-10 py-3 "
              placeholder="Name"
            />
          </div>

          <div>
            <Phone className="w-4 h-4 absolute left-7 top-[241px]" />
            <input
              type="number"
              className="border w-full h-11 rounded-md pl-10 py-3"
              placeholder="Mobile"
            />
          </div>

          <div>
            <MailIcon className="w-4 h-4 absolute left-7 top-[297px]" />
            <input
              type="email"
              className="border w-full h-11 rounded-md pl-10 py-3 "
              placeholder="Email"
            />
          </div>
        </form>
        <div id="verify" className="font-Poppins mt-10">
          <button className="w-[362px] h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5 mt-6">
            Verify mobile number
          </button>
        </div>

        <div className="mt-[250px] font-Poppins px-11 ">
          <p className="font-normal text-sm leading-5 text-[#A2A2A2]">
            Already have an account?{" "}
            <span className="font-semibold text-sm leading-5 text-[#FF6C96]">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
