import React from "react";
import { Button } from "../../Components/Atoms/button";
import { Textfield } from "../../Components/Atoms/Input";
import { HelperText } from "../../Components/Atoms/Typography/Helper";
import { Typography } from "../../Components/Atoms/Typography/index";
import Logo from "../../Components/Atoms/Logo";

const SignUp = () => {
  return (
    <div className=" flex  flex-row h-screen overflow-hideen">
      <div className="bg-primary-50  lg:w-1/2 shadow-custom "></div>
      <div className="w-screen lg:w-1/2 h-full overflow-auto">
        <Logo position="end" />
        <div className="flex align-middle justify-center mt-[10px] ">
          <Typography
            type="h1"
            label="Hi there!"
            color="primary"
            variant={50}
            FontSize="7xl"
            family="poppins"
            classname="font-bold "
          />
        </div>
        <div className="flex justify-center ml-[25px]  ">
          <Typography
            type="h2"
            label="Welcome to M.O."
            color="primary"
            variant={50}
            classname="font-normal "
            FontSize="3xl"
          />
        </div>
        <div className="flex  mt-[60px] flex-col items-center xs:space-y-4 lg:flex lg:flex-row lg:space-y-0 justify-center lg:space-x-5">
          <div className="sm:w-[290px] xs:w-full">
            <Button
              label="Log in with Google"
              color="primary"
              variant="Transparent"
              size="large"
              icon={
                <img
                  src="/Assets/Google.svg"
                  className="mr-[10px]"
                  alt="error"
                ></img>
              }
            ></Button>
          </div>

          <div className="sm:w-[290px] xs:w-full">
            <Button
              label="Connect to Hashpack"
              color="secondary"
              variant="Transparent"
              icon={
                <img
                  src="/Assets/wallet.svg"
                  className="mr-[10px]"
                  alt="error"
                ></img>
              }
              size="large"
            ></Button>
          </div>
        </div>

        <div className=" flex flex-row justify-center py-4 mt-[30px]">
          <div className="w-[50px] bg-text-primary-100 h-[1px]  "></div>
          <Typography
            type="p"
            label="Or"
            FontSize="xs"
            classname="mt-[-9px] ml-[10px] mr-[10px]"
          ></Typography>
          <div className="w-[50px] bg-text-primary-100  h-[1px] "></div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div className="w-[332px] ">
            <Textfield type="email" placeHolder="email"></Textfield>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[332px] mt-[20px] ">
            <Textfield type="password" placeHolder="password"></Textfield>
            <div className="flex justify-end mt-[10px]">
              <HelperText label="forget password?" color="secondary" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-[332px] mt-[30px]">
            <Button
              label="login"
              type="submit"
              color="primary"
              variant="standard"
              size="large"
            ></Button>
          </div>
        </div>

        <div className="flex justify-center mt-[20px]">
          <HelperText label="Don’t have an account?"></HelperText>
          <HelperText
            label="sign up"
            color="secondary"
            className="ml-[-15px]"
          ></HelperText>
        </div>

        <div className="flex justify-between w-full   ">
          <div className="ml-[15px] mt-[40px]">
            <HelperText
              label="info@the-mo.net"
              icon={
                <img
                  src="/Assets/Mail.svg"
                  className="mt-[5px] "
                  alt="error"
                ></img>
              }
              iconPosition="left"
            ></HelperText>
            <div className="py-2 mt-[13px]">
              <HelperText
                label="+447500 058 202"
                icon={
                  <img
                    src="/Assets/Phone.svg"
                    className="mt-[5px] "
                    alt="error"
                  ></img>
                }
                iconPosition="left"
              ></HelperText>
            </div>
          </div>
          <div className="flex justify-end items-end mr-[10px] ">
            <HelperText
              label="Privacy Policy"
              color="info"
              className="text-xxs"
            ></HelperText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
