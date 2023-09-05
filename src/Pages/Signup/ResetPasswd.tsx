import React from "react";
import Logo from "../../Components/Atoms/Logo";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
import { Button } from "../../Components/Atoms/button";
import { HelperText } from "../../Components/Atoms/Typography/Helper";

const ResetPasswd = () => {
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

        <div className="pt-[108px]">
          <Typography
            label="Create new password"
            FontSize="xl"
            color="primary"
            variant={200}
            type="h2"
          />
        </div>
        <div className="mt-[22px] w-[332px] ">
          <div>
            <Typography
              label="Password"
              type="p"
              color="primary"
              variant={200}
              FontSize="sm"
              classname=" font-bold "
            />

            <Textfield
              type="passowrd"
              name="newPasswd"
              placeHolder="Create new password"
            />
            <div className="w-[345px] ">
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

          <div className="mt-[20px]">
            <Typography
              label="Confirm Password"
              type="p"
              color="primary"
              variant={200}
              FontSize="sm"
              classname=" font-bold "
            />

            <Textfield
              type="passowrd"
              name="confirmPasswd"
              placeHolder="Confirm Password"
            />
          </div>

          <div className="flex justify-end">
            <div className="">
              <div className="mt-[30px]">
                <Button
                  type="submit"
                  label="Confirm"
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

export default ResetPasswd;
