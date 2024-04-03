import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Verify from "./components/verify";
import Success from "./components/success";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className='bg-orange-500'>Heli</h1> */}

      <Outlet />
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
]);

export default App;
