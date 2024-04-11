import React from "react";
import { Phone, MailIcon, Name } from "../icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "./api";

const SignUp = () => {
  const [email, setemail] = React.useState("");
  const [name, setname] = React.useState("");
  const [phoneNumber, setphoneNumber] = React.useState("");
  const navigate = useNavigate();
  const role = "user";

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}api/v1/user/register`,
        { name, phoneNumber, email, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Handle response if needed
      console.log("Response:", response);

      if (response.data.success == false) {
        alert(response.data.message);
      }

      if (response.data.success == true) {
        navigate("/verify", { state: phoneNumber });
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

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
              onChange={(value) => setname(value.target.value)}
            />
          </div>

          <div>
            <Phone className="w-4 h-4 absolute left-7 top-[241px]" />
            <input
              type="number"
              className="border w-full h-11 rounded-md pl-10 py-3"
              placeholder="Mobile"
              maxLength={10}
              onChange={(value) => setphoneNumber(value.target.value)}
            />
          </div>

          <div>
            <MailIcon className="w-4 h-4 absolute left-7 top-[297px]" />
            <input
              type="email"
              className="border w-full h-11 rounded-md pl-10 py-3 "
              placeholder="Email"
              onChange={(value) => setemail(value.target.value)}
            />
          </div>
          <div id="verify" className="font-Poppins mt-10">
            <input
              type="submit"
              className="w-[362px] h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5 mt-6"
              value="Verify mobile number"
              onClick={handleOtp}
            />
          </div>
        </form>

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
