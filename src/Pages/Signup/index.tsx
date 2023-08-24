import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Atoms/button";
import { Textfield } from "../../Components/Atoms/Input";
import { HelperText } from "../../Components/Atoms/Typography/Hyper";
import { Typography } from "../../Components/Atoms/Typography/index";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-[100vh] max-w-[1160px]">
      <div className="bg-primary-50 w-screen md:w-1/2 h-80 md:h-screen shadow-cutom"></div>
      <div className="w-screen md:w-1/2 ">
        <div className="mt-[20px] flex justify-end  ">
          <img src="Assets/MO LoGO.svg" alt="logo" />
        </div>
        <Typography
          type="h1"
          color="primary"
          variant={100}
          FontSize="7x1"
          label="Hi there!"
          classname="leading-[100px] pl-[113px] pt-[81px] font-bold "
          family="poppins"
        />
        <Typography
          type="h2"
          color="primary"
          variant={100}
          FontSize="xl"
          label="Welcome to M.O."
          classname="leading-[32px] pl-[113px] font-normal flex justify-center "
        />
        <div className="flex justify-center mt-[30px]">
          <Button
            label="Log in with Google"
            className="font-normal"
            color="primary"
          ></Button>
        </div>
        <div className="flex justify-center ">
          <Typography
            type="p"
            label="or"
            color="primary"
            variant={200}
            FontSize="base"
          />
        </div>
        <div className="w-[332px]  mt-[30px] float-right justify-between">
          <Textfield
            type="email"
            placeholder="Your email"
            className="border border-text-text-primary-100"
          ></Textfield>
          <div className="mt-[20px]">
            <Textfield type="password" placeholder="Your password"></Textfield>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
