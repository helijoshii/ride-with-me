import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Verify from "./components/verify";
import Success from "./components/success";
import Map from "./components/map";
import ConfirmVehicle from "./components/confirmVehicle";
import Search from "./components/search";
import EditProfile from "./components/Profile/editProfile";
import PaymentMode from "./components/Payment/paymentMode";
import PaymentDetails from "./components/Payment/paymentDetails";
import FetchDetails from "./components/FetchDetails";
import RiderDetails from "./components/RiderDetails";
import ProfilePage from "./components/Profile/profile";

function App() {
  return (
    <>
      {/* <h1 className="bg-orange-500">Heli</h1> */}

      {/* <Outlet /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Verify /> */}
      {/* <Success /> */}
      {/* < Verify2 /> */}
    </>
  );
}

export const heli = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/map",
    element: <Search />,
  },
  {
    path: "/confirmVehicle",
    element: <ConfirmVehicle />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/edit",
    element: <EditProfile />,
  },
  {
    path: "/paymode",
    element: <PaymentMode />,
  },
  {
    path: "/paymentDetails",
    element: <PaymentDetails />,
  },
  {
    path: "/fetchdetails",
    element: <FetchDetails />,
  },
  {
    path: "/riderdetails",
    element: <RiderDetails />,
  },

]);

export default App;
