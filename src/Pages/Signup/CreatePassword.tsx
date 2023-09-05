import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import { Textfield } from "../../Components/Atoms/Input";
import { HelperText } from "../../Components/Atoms/Typography/Helper";
import Logo from "../../Components/Atoms/Logo";

const CreatePassword = () => {
  return (
    <>
      <Logo position="start" />
      <div className="flex items-center flex-col mt-[8px]">
        <Typography
          label="Create your account"
          color="primary"
          variant={200}
          type="h1"
          FontSize="4xl"
        />
        <div className="w-[322px] mt-[30px]">
          <Button
            label="Sign up with Google"
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
          <div className=" flex items-center justify-center py-4 mt-[15px]">
            <div className="w-[50px] bg-text-primary-100 h-[1px]  "></div>
            <Typography
              type="p"
              label="Or"
              FontSize="xs"
              classname="mt-[-5px] ml-[10px] mr-[10px]"
            ></Typography>
            <div className="w-[50px] bg-text-primary-100  h-[1px] "></div>
          </div>
          <div className="space-y-5">
            {/* //!email */}
            <div className="mt-[15px]">
              <Typography
                label="Name"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
              />
              <Textfield
                type="text"
                placeHolder="Enter name"
                name="Name"
              ></Textfield>
            </div>
            <div>
              <Typography
                label="Email"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
              />
              <Textfield
                type="email"
                placeHolder="Enter Email id"
                name="Name"
              ></Textfield>
              <div className=" flex justify-end">
                <HelperText
                  color="danger"
                  icon={
                    <img
                      src="/Assets/Danger.svg"
                      alt=""
                      className="pt-[8px] ml-[5px]"
                    />
                  }
                  label="Email already registered"
                  className="text-xxs"
                />
              </div>
            </div>
            <div className="">
              <Typography
                label="Password"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
              />
              <Textfield
                type="Password"
                placeHolder="Create new password"
                name="Name"
              ></Textfield>
              <div className="w-[360px] ">
                <div className="flex flex-row  flex-wrap">
                  <div className="w-1/2">
                    <HelperText
                      label="Atleast one lowercase character"
                      className=" text-xxs "
                      color="primary"
                      icon={
                        <img
                          src="Assets/check.svg"
                          alt=""
                          className="pt-[6px] ml-[4px]"
                        />
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <HelperText
                      label="Atleast one number character"
                      className=" text-xxs "
                      color="primary"
                      icon={
                        <img
                          src="Assets/check.svg"
                          alt=""
                          className="pt-[6px] ml-[4px]"
                        />
                      }
                    />
                  </div>
                  <div className="w-1/2 ">
                    <HelperText
                      label="Atleast one uppercase character"
                      className=" text-xxs "
                      color="primary"
                      icon={
                        <img
                          src="Assets/check.svg"
                          alt=""
                          className="pt-[6px] ml-[4px]"
                        />
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <HelperText
                      label="Atleast one special character"
                      className=" text-xxs "
                      color="primary"
                      icon={
                        <img
                          src="Assets/check.svg"
                          alt=""
                          className="pt-[6px] ml-[4px]"
                        />
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <HelperText
                      label="8 character’s minimum"
                      className=" text-xxs "
                      color="primary"
                      icon={
                        <img
                          src="Assets/check.svg"
                          alt=""
                          className="pt-[6px] ml-[4px]"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography
                label="Confirm Password"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
              />
              <Textfield
                type="Password"
                placeHolder="Confirm Password"
                name="Name"
              ></Textfield>
              <div className="flex items-center space-x-2 mt-[10px]">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px]  border-text-primary-200 rounded outline-none checked:text-text-primary-200  checked:bg-transparent"
                />
                <label
                  htmlFor="checkbox"
                  className="text-text-primary-300  text-xxs"
                >
                  Send me Updates of M.O.
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-[10px]">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] text-text-primary-200 focus:ring-transparent border-text-primary-200 rounded outline-none checked:text-text-primary-200  checked:bg-transparent"
                />
                <label
                  htmlFor="checkbox"
                  className="text-text-primary-300  text-xxs"
                >
                  I have read and agreed to the M.O.{" "}
                  <span className="text-text-secondary-50">
                    Term of Services{" "}
                  </span>
                  and{" "}
                  <span className="text-text-secondary-50">
                    Privacy Policy.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <Button
              label="Create Account"
              color="primary"
              variant="standard"
              size="large"
            />
          </div>
          <div className="mt-[10px] flex flex-row justify-center">
            <HelperText label="Don’t have an account?"></HelperText>
            <HelperText
              label="sign up"
              color="secondary"
              className="ml-[-15px]"
            ></HelperText>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-[100px] mt-[20px] ml-[20px] mb-[20px]  ">
        <Button label="Back" variant="Transparent" color="secondary" />
      </div>
    </>
  );
};

export default CreatePassword;
