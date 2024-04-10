import React from "react";
import sc from "../assets/scooter.svg";
import { Phone } from "../icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

function SignIn() {
  const [phoneNumber, setphoneNumber] = React.useState("");
  const navigate = useNavigate();
  async function handleOpt() {
    try {
      const response = await axios.post(
        `http://13.126.70.159/api/v1/user/send-login-otp`,
        { phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Handle response if needed
      console.log("Response:", response);
      if (response.data.success == false) {
        alert("please sigb up first");
        navigate("/signup", { state: phoneNumber });
      }
      if (response.data.success == true) {
        navigate("/verify", { state: phoneNumber });
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
              type="tel"
              className="border w-80 h-11 rounded-lg pl-10 py-3"
              placeholder="Mobile"
              value={phoneNumber}
              maxLength={10}
              required
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div id="signIn" className=" flex flex-col font-Poppins gap-2">
          <button
            className="w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm leading-5 mx-auto mt-6"
            onClick={handleOpt}
          >
            Sign in
          </button>
        </div>
      </div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SignIn;
