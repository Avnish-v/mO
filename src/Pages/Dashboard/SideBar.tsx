import React from "react";
import { Button } from "../../Components/Atoms/button";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div
        className="w-[50px] shadow-sideBar  bg-primary-100 
    sidebarHeight   "
      >
        <div className="flex flex-col  items-center  space-y-[15px] overflow-y-auto">
          <div className="mt-[16px]">
            <Link to="/">
              <Button
                label=""
                variant="line"
                icon={
                  <img
                    src="/Assets/Dashboard.svg"
                    className=" hover:w-[20px]"
                  ></img>
                }
              />
            </Link>
          </div>
          <Link to="/project">
            <Button
              label=""
              variant="line"
              icon={
                <img
                  src="/Assets/BookLibrary.svg"
                  className=" hover:w-[25px]"
                ></img>
              }
            />
          </Link>
          <Button
            label=""
            variant="line"
            icon={
              <img
                src="/Assets/AccountGrp.svg"
                className=" hover:w-[30px]"
              ></img>
            }
          />{" "}
          <Button
            label=""
            variant="line"
            icon={
              <img
                src="/Assets/Diversity.svg"
                className=" hover:w-[30px]"
              ></img>
            }
          />
          <Button
            label=""
            variant="line"
            icon={
              <img
                src="/Assets/BusinessOutline.svg"
                className=" hover:w-[30px]"
              ></img>
            }
          />
          <Button
            label=""
            variant="line"
            icon={
              <img
                src="/Assets/BaseLineHistory.svg"
                className=" hover:w-[30px]"
              ></img>
            }
          />
          <Button
            label=""
            variant="line"
            icon={
              <img
                src="/Assets/Fluent_library.svg"
                className=" hover:w-[30px]"
              ></img>
            }
          />
          <Button
            label=""
            variant="line"
            icon={
              <img src="/Assets/gravel.svg" className=" hover:w-[30px]"></img>
            }
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
