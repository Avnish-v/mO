import React from "react";
import { Button } from "../../Atoms/button";
import SucessAssign from "../../Atoms/SVG/SucessAssign";
import { Typography } from "../../Atoms/Typography";

const Sucess = (props: any) => {
  const { close } = props;
  return (
    <div className="fixed inset-0 pl-[20px] flex justify-center items-center z-50">
      <div className="w-[565px] h-[577px] shadow-navbar  rounded-[5px] z-50 bg-white p-[20px] justify-center">
        <div className="flex flex-col items-center space-y-[10px]">
          <SucessAssign />
          <Typography
            label="Project Sent"
            type="h1"
            classname="text-text-sucess-100 text-[36px] leading-[44px] "
          />
          <Typography
            label=" Your project has been sent to provider"
            type="h1"
            classname="leading-8  "
            color="primary"
            variant={200}
            FontSize="3xl"
          />
          <div></div>
          <div className=" w-[525px] h-[221px] shadow-navbar rounded-[5px] ">
            <div className="flex p-[20px] justify-between">
              <div className=" space-y-[20px]">
                <div>
                  <Typography
                    label="Project"
                    type="p"
                    color="primary"
                    variant={200}
                    FontSize="base"
                    classname="font-medium "
                  />
                  <Typography
                    label="Healthify App UX/UI"
                    type="p"
                    FontSize="sm"
                    color="primary"
                    variant={300}
                  />
                </div>
                <div>
                  <Typography
                    label="Provider"
                    type="p"
                    color="primary"
                    variant={200}
                    FontSize="base"
                    classname="font-medium "
                  />
                  <Typography
                    label="Jenny Miles"
                    type="p"
                    FontSize="sm"
                    color="primary"
                    variant={300}
                  />
                </div>
                <div>
                  <Typography
                    label="Duration"
                    type="p"
                    color="primary"
                    variant={200}
                    FontSize="base"
                    classname="font-medium "
                  />
                  <Typography
                    label="6 Months"
                    type="p"
                    FontSize="sm"
                    color="primary"
                    variant={300}
                  />
                </div>
              </div>
              <div className="space-y-[20px]">
                <div>
                  <Typography
                    label="Project ID"
                    type="p"
                    color="primary"
                    variant={200}
                    FontSize="base"
                    classname="font-medium "
                  />
                  <Typography
                    label="6541365"
                    type="p"
                    FontSize="sm"
                    color="primary"
                    variant={300}
                  />
                </div>
                <div>
                  <Typography
                    label="Royalties"
                    type="p"
                    color="primary"
                    variant={200}
                    FontSize="base"
                    classname="font-medium "
                  />
                  <Typography
                    label="10%"
                    type="p"
                    FontSize="sm"
                    color="primary"
                    variant={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //!button */}
        <div className=" flex justify-end pt-[20px]">
          <div className="w-[176px]">
            <Button label="View Project Details" onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
