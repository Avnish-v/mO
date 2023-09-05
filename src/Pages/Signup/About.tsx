import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
import { HelperText } from "../../Components/Atoms/Typography/Helper";
import Drag from "../../Components/Atoms/DragFile/Drag";
const About = () => {
  return (
    <>
      <div className="w-[332px] mt-[50px]">
        <div className="">
          <Typography
            label="Name"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield
            type="email"
            placeHolder="Nina Subnani"
            name="Name"
          ></Textfield>
        </div>

        <div className="mt-[18px]">
          <Typography
            label="About"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield
            type="text"
            multiline={true}
            placeHolder="Write few things about yourself"
            name="Name"
          ></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="Phone No."
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield
            type="phone"
            placeHolder="+91-1234567890"
            name="Name"
          ></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="Attach Photo"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          {/* <Textfield
            type="file"
            placeHolder="Drop your file or browse"
            name="Name"
            className="outline-none "
          ></Textfield> */}
          <div className="border border-dashed  border-text-gray-50 h-[68px] flex justify-center items-center">
            <Drag
              label={
                <div className="flex ">
                  <Typography
                    label="Drop your file or "
                    type="p"
                    color="primary"
                    FontSize="sm"
                    variant={50}
                  />
                  <div className="ml-[-15px] pb-[2px]">
                    <HelperText
                      label="browse"
                      color="secondary"
                      className="text-sm underline"
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex flex-row">
            <HelperText
              className="text-xxs text-text-primary-100"
              label="400400px recommended."
            />
            <div className="ml-[-15px] pb-[2px]">
              <HelperText
                className="text-xxs text-text-primary-100"
                label="JPGs, JPEGs and PNG Supported."
              ></HelperText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
