import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
const Experience = () => {
  return (
    <>
      <div className="w-[332px] mt-[30px]">
        <div className="felx-col  space-y-2.5 items-center ">
          <div className="">
            <Typography
              label="Position Held"
              type="p"
              FontSize="sm"
              color="primary"
              variant={300}
              classname="font-bold "
            />
            <Textfield type="text" placeHolder="select" />
          </div>
          <div className="">
            <Typography
              label="Company"
              type="p"
              FontSize="sm"
              color="primary"
              variant={300}
              classname="font-bold "
            />
            <Textfield type="text" placeHolder="Search institute" />
          </div>
          <div className="">
            <Typography
              label="Start Date"
              type="p"
              FontSize="sm"
              color="primary"
              variant={300}
              classname="font-bold "
            />
            <Textfield type="text" placeHolder="select" />
          </div>

          <div className="">
            <Typography
              label="End Date"
              type="p"
              FontSize="sm"
              color="primary"
              variant={300}
              classname="font-bold "
            />
            <Textfield type="text" placeHolder="select" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
