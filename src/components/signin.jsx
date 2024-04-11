import React from "react";
import sc from "../assets/scooter.svg";
import { Phone } from "../icons";
import axios from "axios";
import { url } from "./api";
import { Drawer } from "vaul";
import { useNavigate } from "react-router-dom";
// import { Drawer } from "./drawer";

function SignIn() {
  const [phoneNumber, setphoneNumber] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  // const [snap, setSnap] = useState<number | string | null>("148px");
  const navigate = useNavigate();
  async function handleOpt() {
    try {
      const response = await axios.post(
        `${url}api/v1/user/send-login-otp`,
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
            Welcome to Easy Go!
          </h1>
        </div>

        <div className="pr-2 pl-1 mb-10">
          <div id="input" className="gap-2  flex flex-col items-center">
            {/* <Phone className="w-4 h-4 absolute left-11 top-[327px]" /> */}
            <input
              type="tel"
              className="border w-80 h-11 rounded-lg pl-5 py-3"
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
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button>Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className={`bg-zinc-100 flex flex-col rounded-t-[10px]  ${
              isOpen ? "h-full" : "h-[15%]"
            }  mt-24 fixed bottom-0 left-0 right-0`}
          >
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8"
                onClick={() => setIsOpen(!isOpen)}
              />

              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  Unstyled drawer for React.
                </Drawer.Title>
                <p className="text-zinc-600 mb-2">
                  This component can be used as a replacement for a Dialog on
                  mobile and tablet devices.
                </p>
                <p className="text-zinc-600 mb-8">
                  It uses{" "}
                  <a
                    href="https://www.radix-ui.com/docs/primitives/components/dialog"
                    className="underline"
                    target="_blank"
                  >
                    Radix&apos;s Dialog primitive
                  </a>{" "}
                  under the hood and is inspired by{" "}
                  <a
                    href="https://twitter.com/devongovett/status/1674470185783402496"
                    className="underline"
                    target="_blank"
                  >
                    this tweet.
                  </a>
                </p>
                <div data-vaul-no-drag className="w-full bg-gray-400 h-16">
                  Try dragging me
                </div>
              </div>
            </div>
            <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://github.com/emilkowalski/vaul"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://twitter.com/emilkowalski_"
                  target="_blank"
                >
                  Twitter
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export default SignIn;
