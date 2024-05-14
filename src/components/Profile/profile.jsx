import {
  Backarrow,
  Camera,
  DisplayPhoto,
  Help,
  Info,
  Logout,
  Name,
  ProfileIcon,
} from "@/icons";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import EditProfile from "./editProfile";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const edit = () => {
    navigate("edit");
  };

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="249px"
        className="bla bla bla rounded-r-3xl"
      >
        <div className="ml-5 font-poppins flex flex-col">
          <Backarrow className=" mt-8" />
          <label
            htmlFor="filee"
            className="w-16 h-16 bg-white mt-9 cursor-pointer"
          >
            <DisplayPhoto className="h-full w-full" />
            <Camera className="absolute top-[123px] left-14 h-6 w-6" />
          </label>
          <input id="filee" type="file" className="w-16 h-16 hidden" />

          <div className="font-medium text-[#414141] mt-7 text-left">
            <p className="text-lg leading-6">Anne Blake</p>
            {/* <p className="text-xs leading-[18px]">abc@gmail.com</p> */}
          </div>

          <div className="mt-10 font-normal text-sm leading-4">
            <div className="flex flex-row mt-2 mb-4">
              <ProfileIcon className="mr-3" />
              <p className="text-left cursor-pointer" onClick={edit}>
                Edit Profile
              </p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Info className="mr-3" />
              <p className="text-left">About Us</p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Help className="mr-3" />
              <p className="text-left">Help and Support</p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Logout className="mr-3" />
              <p className="text-left">Logout</p>
            </div>
            <hr />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ProfilePage;
