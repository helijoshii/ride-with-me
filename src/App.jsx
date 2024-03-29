import { useState } from "react";
import "./App.css";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Reset from "./components/reset";
import Verify from "./components/verify";
import Success from "./components/success";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className='bg-orange-500'>Heli</h1> */}

      {/* <SignIn /> */}
      <SignUp />
      {/* <Verify /> */}
      {/* <Success /> */}
    </>
  );
}

export default App;
