import { Backarrow, Help, Info, Logout, Name, ProfileIcon } from "@/icons";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
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
          <div className="w-16 h-16 bg-purple-500 mt-9 ">
            {/* <input type="file" placeholder='' /> */}
          </div>

          <div className="font-medium text-[#414141] mt-7 text-left">
            <p className="text-lg leading-6">Anne Blake</p>
            <p className="text-xs leading-[18px]">abc@gmail.com</p>
          </div>

          <div className="mt-10 font-poppins font-normal text-sm leading-4">
            <div className="flex flex-row mt-2 mb-4">
              <ProfileIcon className="h-5 w-5 mr-4" />
              <p className="text-left">Edit Profile</p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Info />
              <p className="text-left">About Us</p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Help />
              <p className="text-left">Help and Support</p>
            </div>
            <hr />
            <div className="flex flex-row  mt-2 mb-4">
              <Logout />
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
