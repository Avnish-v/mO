import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import Logo from "../../Components/Atoms/Logo";

const VerifyEmail = () => {
  return (
    <>
      <Logo position="start" />
      <div className="flex justify-center mt-[20px]">
        <Typography type="h1" label="E-mail verification" FontSize="4xl" />
      </div>
      <div className="flex justify-center items-center h-[25vh] "></div>
      <div className="flex justify-center">
        <Typography
          label="Hi! we’ve sent a link to your email:"
          type="p"
          FontSize="2xl"
        />
      </div>

      <div className="flex justify-center ">
        <Typography
          label="Sandeepkumar.dummymail34@gmail.com"
          type="h2"
          classname="font-bold xxs:text-lg  lg:2xl"
        />
      </div>
      <div className="flex justify-center ">
        <Typography
          label="Click on link to verify your email"
          type="p"
          classname="font-normal xxs:text-lg  sm:2xl"
        />
      </div>
      <div className="flex justify-center ">
        <div className="w-[135px] mt-[20px]">
          <Button
            label="Resend Email"
            color="secondary"
            variant="Transparent"
          />
        </div>
      </div>
      <div className="flex justify-start items-end h-[25vh] ml-[20px] mb-[20px]">
        <div className="w-[100px] ">
          <Button label="Back" color="secondary" variant="Transparent" />
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
