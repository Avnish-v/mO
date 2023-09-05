import React from "react";
import { SignUpProfile } from "../../Components/Molecules/SignUpProfile";
import Logo from "../../Components/Atoms/Logo";
import About from "./About";
import { Button } from "../../Components/Atoms/button";
import Address from "./Address";
import Wallet from "./Wallet";
import Experience from "../ProviderSignup/Experience";
const LancerProfile = () => {
  return (
    <>
      <Logo />
      <div className=" hidden sm:block">
        <SignUpProfile items={["About", "Address", "Experience", "Wallet"]} />
      </div>
      <div className="flex  flex-col items-center">
        {/* <About /> */}
        {/* <Address /> */}
        <Wallet />
        {/* <Experience /> */}
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
