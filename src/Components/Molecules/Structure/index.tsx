import React from "react";
import { Typography } from "../../Atoms/Typography";
import { useState, useEffect } from "react";
import { Button } from "../../Atoms/button";
import { Link } from "react-router-dom";

interface Struct {
  optionText?: any;
  TopButton?: any;
  Buttons?: any;
  Heading: any;
  sideComponent?: any;
  sideComponetHeading?: any;
  mainSection: any;
}
let a = [1, 2, 34];
const Structure = (props: Struct) => {
  const {
    Buttons,
    TopButton,
    optionText,
    Heading,
    sideComponent,
    sideComponetHeading,
    mainSection,
  } = props;
  console.log("in the main");
  return (
    <div className=" sectionWidth    mt-[20px] md:mr-[20px] ml-[20px] scroll-smooth lg:pl-[62px] lg:pr-[20px]">
      <div className="flex flex-row justify-between sm:flex  ">
        <div className="">
          <Typography
            type="h1"
            label={Heading}
            variant={50}
            color="secondary"
            FontSize="3xl"
            classname="leading-[32px] "
          />
        </div>
        <div>
          {TopButton && <div className="flex space-x-[20px]">{TopButton}</div>}
        </div>
      </div>
      <div className="flex lg:flex-row xs:flex-col mt-[20px] mr-[20px] ml-[20] space-x-5 ">
        <div className="w-[100%]  ">
          <div className="mt-[20px] flex justify-between border-b-2 border-text-gray-50">
            <div className=" flex space-x-[10px] pt-[5px] ">
              {optionText && optionText}
            </div>
            {Buttons && <div className="flex space-x-3 ">{Buttons}</div>}
          </div>
          {mainSection}
        </div>
        {sideComponent && (
          <div className="lg:w-[30%]   ">
            <div className="ml-[10px] mt-[35px] border-b-2 border-text-gray-50 ">
              {sideComponetHeading}
            </div>

            {sideComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Structure;
