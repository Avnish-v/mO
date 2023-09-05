import React from "react";
import { useState } from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import Card from "./Card";
import ProjectSummary from "./ProjectSummary";
import { SignUpProfile } from "../../Components/Molecules/SignUpProfile";
import Project from "./Project";
const Dashboard = () => {
  const [Active, SetActive] = useState<number | null>(0);

  const handleClick = (index: number) => {
    SetActive(index === Active ? null : index);
  };

  let a = [1, 2, 3, 4, 3];
  let selectedValue;
  let navPrj = ["project Details", "Documents", "Provider"];
  if (Active !== null) {
    selectedValue = navPrj[Active];
  } else {
    console.log("Active is null");
  }
  return (
    <div className="w-[100vw] mt-[20px] mr-[20px] ml-[20px] scroll-smooth pl-[62px] pr-[20px]">
      <div className="flex flex-row justify-between  ">
        <div className="">
          <Typography
            type="h1"
            label="Dashboard"
            variant={50}
            color="secondary"
            FontSize="3xl"
            classname="leading-[32px] "
          />
        </div>
        <div>
          <Button
            variant="standard"
            color="primary"
            label="Create New Project"
            size="small"
          />
        </div>
      </div>
      {/* //!inner content navb */}
      <div className="flex mt-[20px] mr-[20px] ml-[20] space-x-5 ">
        <div className="w-[100%]  ">
          <div className="mt-[20px] flex justify-between border-b-2 border-text-gray-50">
            <div className=" flex space-x-[10px] pt-[5px] ">
              {navPrj.map((element, index) => {
                const isActive = index === Active;
                return (
                  <div key={index}>
                    <Button
                      onClick={() => {
                        handleClick(index);
                      }}
                      label={element}
                      variant="line"
                      color="primary"
                      size="small"
                      className={`ml-[5px] ${
                        index == Active
                          ? "text-text-secondary-50 border-b-4 border-text-secondary-50"
                          : "text-text-primary-300 "
                      }  `}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-3">
              <Button
                icon={<img src="/Assets/Sort.svg" />}
                variant="Transparent"
                label="Sort By"
                size="small"
                color="secondary"
                className="text-sm "
              />

              <Button
                variant="Transparent"
                label="Filter By"
                size="small"
                color="secondary"
                icon={<img src="/Assets/Sort.svg" />}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between ">
            {/* //! card  */}
            {selectedValue == "Assigned" &&
              a.map((Element, index) => {
                return (
                  <div key={index}>
                    <Card />
                  </div>
                );
              })}

            {selectedValue == "project Details" && <Project />}
          </div>
        </div>

        {selectedValue == "Assigned" && (
          <div className="w-[30%]   ">
            <div className="ml-[10px] mt-[35px] border-b-2 border-text-gray-50 ">
              <Typography
                label="Project Summary"
                type="h2"
                FontSize="sm"
                classname="font-bold "
                color="primary"
                variant={200}
              />
            </div>
            <ProjectSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
