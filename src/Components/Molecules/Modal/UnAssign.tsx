import React from "react";
import { Button } from "../../Atoms/button";
import UnAssignSvg from "../../Atoms/SVG/UnAssignSvg";
import { Typography } from "../../Atoms/Typography";

const UnAssign = (props: any) => {
  const { close } = props;
  console.log(close);
  return (
    <div className="fixed inset-0 pl-[20px] flex justify-center items-center z-50">
      <div className="w-[565px] h-[510px] shadow-navbar  rounded-[5px] z-50 bg-white p-[20px] justify-center">
        <div className="flex flex-col items-center space-y-[10px]">
          <UnAssignSvg />
          <Typography
            label="Project Sent"
            type="h1"
            classname="text-text-warning-200 text-[36px] leading-[44px] "
          />
          <Typography
            label="Project will be save in Unassigned Projects"
            type="h1"
            classname="leading-8  "
            color="primary"
            variant={200}
            FontSize="3xl"
          />
          <div></div>
          <div className=" w-[525px]  shadow-navbar rounded-[5px] ">
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
        <div className=" flex justify-between pt-[20px]">
          <div className="w-[221px]">
            <Button
              label="Save Project in Unassigned"
              onClick={close}
              variant="Transparent"
              color="secondary"
            />
          </div>
          <div className="w-[149px]">
            <Button label="Assign Provider" onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAssign;
