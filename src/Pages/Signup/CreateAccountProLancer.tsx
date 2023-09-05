import React, { useState } from "react";
import { useRef } from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import Logo from "../../Components/Atoms/Logo";
const CreateAccountProLancer = () => {
  const [isPurchaser, setisPurchaser] = useState(false);
  const [isProvider, setisProvider] = useState(false);
  const [changeVariant, setChangeVaraint] = useState(300);
  const handlePurchaserClick = () => {
    setisProvider(false);
    setisPurchaser(true);
    setChangeVaraint(50);
  };
  const handleProviderClick = () => {
    setisProvider(true);
    setisPurchaser(false);
    setChangeVaraint(50);
  };
  return (
    <div>
      <Logo position="start" />
      <div className="flex  justify-center mt-[8px]">
        <Typography
          label="Create your account"
          type="h1"
          FontSize="4xl"
          variant={200}
          color="primary"
        />
      </div>
      <div className="flex justify-center mt-[71px]">
        <Typography
          label="I am a"
          type="h2"
          FontSize="2xl"
          variant={200}
          color="primary"
        />
      </div>
      <div className="flex sm:flex-row xs:flex-col xs:items-center sm:justify-evenly justify-center mt-[20px]">
        <div onClick={handleProviderClick}>
          <div
            className={`w-[203px] h-[277px] shadow-provider flex justify-center rounded-[5px]  ${
              isProvider ? "border-b-8 border-primary-300" : ""
            }`}
          >
            <img src="/Assets/provider.svg" alt="" className="w-[128px]" />
          </div>
          <div className="flex justify-center mt-[20px] ">
            <Typography
              color={`${isProvider ? "secondary" : "primary"}`}
              variant={changeVariant}
              label="Provider"
              type="p"
              FontSize="2xl"
            />
          </div>
        </div>
        <div>
          <div
            onClick={handlePurchaserClick}
            className={`xs:items-center w-[203px]  h-[276px] flex justify-center shadow-provider rounded-[5px] xs:mt-[10px] sm:mt-[0px] ${
              isPurchaser ? "border-b-8 border-primary-300" : ""
            }`}
          >
            <img src="/Assets/Lancer.svg" alt="" className="w-[239px] " />
          </div>
          <div className=" flex justify-center  mt-[20px] hover:text-bg-primary-300 ">
            <Typography
              color={`${isPurchaser ? "secondary" : "primary"}`}
              variant={changeVariant}
              label="Purchaser"
              type="p"
              FontSize="2xl"
              classname=""
            />
          </div>
        </div>
      </div>
      {/* //!back btn */}
      <div className="flex justify-start w-[32px] mt-[158px] ml-[20px] mb-[20px]  ">
        <Button label="Back" variant="Transparent" color="secondary" />
      </div>
    </div>
  );
};

export default CreateAccountProLancer;
