import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
const Address = () => {
  return (
    <>
      <div className="w-[332px] mt-[50px]">
        <div className="">
          <Typography
            label="Street Address"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield
            type="text"
            placeHolder="2201, Elite Apartments"
            name="Name"
          ></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="City"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield type="text" placeHolder="Mumbai" name="Name"></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="State/Province"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield
            type="text"
            placeHolder="Maharashtra"
            name="Name"
          ></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="ZIP/Postal Code"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <Textfield type="text" placeHolder="123456" name="Name"></Textfield>
        </div>
        <div className="mt-[18px]">
          <Typography
            label="Country"
            type="p"
            FontSize="sm"
            color="primary"
            variant={200}
          />
          <select
            name="country"
            id="country"
            className="w-[332px] h-[40px] border broder-1 border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
          >
            <option value="india">India</option>
            <option value="USA">USA</option>
            <option value="UAE">UAE</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Address;
