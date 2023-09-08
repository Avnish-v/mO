import React from "react";
import { useState } from "react";
import Logo from "../../Components/Atoms/Logo";
import About from "./About";
import { Button } from "../../Components/Atoms/button";
import Address from "./Address";
import Wallet from "./Wallet";
import Experience from "../ProviderSignup/Experience";
const LancerProfile = () => {
  let items = ["About", "Address", "Experience", "Wallet"];
  const [Active, SetActive] = useState<number | null>(0);

  const handleClick = (index: number) => {
    SetActive(index === Active ? null : index);
  };
  let selected = items[0];
  if (Active !== null) {
    selected = items[Active];
  } else {
    console.log("Active is null");
  }

  return (
    <>
      <Logo />
      <div className=" hidden sm:block">
        <div className="flex justify-center ">
          {items &&
            items.map((element, index) => {
              const isActive = index === Active;
              return (
                <div key={index} className=" border-b border-text-primary-300">
                  <div className="ml-[7px] mr-[7px]">
                    <Button
                      label={element}
                      variant="line"
                      color="primary"
                      size="large"
                      className={` pb-[20px] text-4xl text-text-gray-50  ${
                        index == Active
                          ? "text-4xl active:font-bold text-text-secondary-50 border-b-4 border-text-secondary-50"
                          : ""
                      } `}
                      onClick={() => {
                        handleClick(index);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex  flex-col items-center">
        {selected == "About" && <About />}
        {selected == "Address" && <Address />}
        {selected == "Experience" && <Experience />}
        {selected == "Wallet" && <Wallet />}
      </div>

      <div className="absolute  left-[20px] bottom-[20px] w-[100px]">
        <Button label="Back" variant="Transparent" color="secondary" />
      </div>
      <div className="flex justify-between ">
        <div className=" absolute right-[20px] bottom-[20px] z-10 ">
          <Button label="continue" variant="standard" color="primary" />
          {/* //! if wallet is active  then label will be skip and if not the label will be continue */}
        </div>
        <div className=" absolute right-[150px] bottom-[20px] z-0 ">
          <Button label="skip" variant="Transparent" color="secondary" />
          {/* //! if wallet is active  then label will be skip and if not the label will be continue */}
        </div>
      </div>
    </>
  );
};

export default LancerProfile;
