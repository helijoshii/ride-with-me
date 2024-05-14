import React from "react";
import { Drawer } from "vaul";

const ConfirmVehicle = () => {
  return (
    <>
      <Drawer.Root
        open={initDrawerOpen}
        onOpenChange={setInitDrawerOpen}
        modal={false}
      >
        <Drawer.Trigger asChild>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className={`bg-zinc-100 flex flex-col rounded-t-[10px]  ${
              isOpen ? "h-full" : `h-[20%]`
            }  mt-24 fixed bottom-0 left-0 right-0`}
          >
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8"
                onClick={() => setIsOpen(!isOpen)}
              />

              <div className="max-w-md mx-auto h-[-5px] px-4">
                <Drawer.Title className="font-medium mb-4">
                  <input
                    type="text"
                    className="border w-80 h-11 rounded-lg px-5 leading-5 text-sm mb-4 placeholder:font-poppins"
                    placeholder="Search destination"
                    required
                  />
                  <input
                    type="text"
                    className="border w-80 h-11 rounded-lg px-5 leading-5 text-sm place-content-center placeholder:font-poppins"
                    placeholder="Current location"
                    value={inputpickup}
                    required
                  />
                </Drawer.Title>
                {isList ? (
                  <Vehicle distance={distance} />
                ) : (
                  <button
                    className={`w-80 h-12 rounded-xl p-2 text-white bg-[#FF6C96] font-semibold text-sm mt-[200px] leading-5 mx-auto `}
                    onClick={() => {
                      getPickUp(inputpickup);
                      getDropOff(inputdrop);
                      setIsList(true);
                    }}
                  >
                    Confirm location
                  </button>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default ConfirmVehicle;
