import React from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
const ProjectSummary = () => {
  let a = [1, 2, 3, 45, 3];
  return (
    <div className=" flex flex-col xs:items-center lg:items-start xs:mr-[20px] md:mr-[0px] xs:mb-[20px] lg:mb-[0px]  ">
      <div className="md:w-[384px] xs:w-[360px] h-[260px] mt-[9px] mb-[11px] flex  shadow-navbar  rounded-[5px] justify-evenly relative">
        {/* //!text */}
        <div className=" mt-[76px]">
          <div className="flex flex-col items-center">
            <h3 className="text-[45px] text-text-primary-200 font-bold leading-[52px]">
              11
            </h3>
            <Typography
              label="Total Projects"
              type="p"
              FontSize="base"
              color="primary"
              variant={200}
            />
          </div>
          <div className="absolute left-[40px] top-[45px] ">
            <img src="/Assets/summaryPRJ.svg"></img>
          </div>
        </div>

        <div className=" pt-[32px] space-y-[8px] ">
          <Typography
            label="Unassigned"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-primary-100 pl-[4px] "
          />
          <Typography
            label="InProgress"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-text-sucess-100 pl-[4px] "
          />
          <Typography
            label="Hold"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-text-Hold-50 pl-[4px] "
          />
          <Typography
            label="Rework"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-text-danger-100 pl-[4px] "
          />
          <Typography
            label="Completed"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-black pl-[4px] "
          />
          <Typography
            label="In Review"
            type="p"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="border-l-[3px] border-text-warning-100 pl-[4px] "
          />
        </div>
      </div>
      <div className="mt-[10px] border-b-[1px] border-text-gray-50 ">
        <Typography
          label="Task"
          type="h2"
          classname="ml-[5px] font-bold "
          FontSize="sm"
          color="primary"
          variant={200}
        />
      </div>
      <div className="md:w-[382px] xs:w-[360px]  mt-[10px] flex flex-col  shadow-navbar rounded-[5px]">
        <div className="flex justify-between  border-b-2 pt-[15px] lg:pl-[15px] pr-[15px] pb-[5px] xs:flex-row">
          <Typography
            type="p"
            label="project"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="font-bold "
          />
          <Typography
            type="p"
            label="Next Milestone"
            color="primary"
            variant={200}
            FontSize="sm"
            classname="font-bold "
          />
        </div>
        {a.map((Element, index) => {
          return (
            <div
              key={index}
              className="flex  justify-around border-b-2 border-text-gray-50 pt-[10px] lg:pl-[10px] lg:pr-[10px] pb-[5px]"
            >
              <img src="/Assets/Timer.svg" />
              <Typography
                label="Fitness App UX/UI Project"
                type="h2"
                classname="ml-[5px] font-bold "
                FontSize="sm"
                color="primary"
                variant={200}
              />
              <Typography
                label="June 21, 2023"
                type="h2"
                classname="ml-[5px] font-bold "
                FontSize="sm"
                color="primary"
                variant={200}
              />
            </div>
          );
        })}
        {/* //!logs */}
      </div>
    </div>
  );
};
export default ProjectSummary;
