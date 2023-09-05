import React from "react";
import Logo from "../../Components/Atoms/Logo";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import { Textfield } from "../../Components/Atoms/Input";
import { HelperText } from "../../Components/Atoms/Typography/Helper";
import ResetPasswd from "./ResetPasswd";

const Forget = () => {
  return (
    <>
      <Logo position="start" />
      <div className="flex flex-col items-center ">
        <div className="mt-[8px]">
          <Typography
            type="h1"
            label="Reset Password"
            FontSize="4xl"
            color="primary"
            variant={200}
          />
        </div>

        <div className="pt-[200px]">
          <Typography
            label="Enter register email id"
            FontSize="xl"
            color="primary"
            variant={200}
            type="h2"
          />
        </div>
        <div className="mt-[22px] w-[332px] ">
          <Typography
            label="Email Id"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname=" font-bold "
          />

          <Textfield
            type="email"
            name="emailReset"
            placeHolder="Enter email id"
          />

          <div className="flex justify-end">
            <div className="">
              <HelperText
                label="Email is not registered."
                color="danger"
                icon={
                  <img
                    src="/Assets/Danger.svg"
                    alt="error"
                    className="pt-[8px]"
                  ></img>
                }
                className="text-xxs"
              />
              <div className="mt-[30px]">
                <Button
                  type="submit"
                  label="continue"
                  color="primary"
                  variant="standard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-5 bottom-5">
        <div className="w-[100px]">
          <Button label="Back" color="secondary" variant="Transparent" />
        </div>
      </div>
    </>
  );
};

export default Forget;
