import React from "react";
import sc from "../assets/scooter.svg";
import { Phone } from "../icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [mobile, setMobile] = React.useState("");
  const navigate = useNavigate();
  async function handleSignIn() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/send-login-otp",
        { mobile },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Handle response if needed
      console.log("Response:", response.data);
      if (response.data.status === "success") {
        navigate("/SignIn");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div id="container" className=" bg-white w-fit mx-auto">
        <div id="image" className="flex justify-center">
          <img src={sc} className=" mt-7 mx-auro w-[281px] h-[202px] mb-3" />
        </div>
        <div id="Welcome-text" className="mb-9 w-[330px] h-9">
          <h1 className="leading-9 text-2xl font-semibold font-Poppins text-center">
            Welcome to ride with me!
          </h1>
        </div>

        <div className="pr-2 pl-1 mb-10">
          <div id="input" className="gap-2  flex flex-col items-center">
            <Phone className="w-4 h-4 absolute left-11 top-[327px]" />
            <input
              type="number"
              className="border w-80 h-11 rounded-lg pl-10 py-3"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>

        <div id="signIn" className=" flex flex-col font-Poppins gap-2">
          <button className="w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5 mx-auto mt-6">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
