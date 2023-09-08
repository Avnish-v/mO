import React from "react";
import { Button } from "../../Atoms/button";
import Logo from "../../Atoms/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
const HamBurgerOptions = () => {
  const [active, setactive] = useState("Dashboard");
  const whichIsActive = (name: string) => {
    setactive(name);
  };
  return (
    <div className="h-[100vh] z-50  w-[30vh] md:w-[40vh] top-0 left:0 lg:hidden">
      <div className="flex flex-col items-center">
        <Logo />
        <div className="  justify-center space-y-[15px] mt-[20px]  ">
          <div
            className={`w-[300px] flex justify-center  ${
              active == "Dashboard" ? "bg-primary-500" : " "
            }   `}
          >
            <Link to="/">
              <Button
                variant="line"
                onClick={() => {
                  whichIsActive("Dashboard");
                }}
                label="Dashboard"
                className="ml-[10px] "
                icon={<img src="/Assets/hamburger/Dashboard.svg" />}
              ></Button>
            </Link>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "project" ? "bg-primary-500" : " "
            }   `}
          >
            <Link to="/create-project">
              <Button
                onClick={() => {
                  whichIsActive("project");
                }}
                variant="line"
                className="ml-[10px] "
                label="My Projects"
                icon={<img src="/Assets/hamburger/MyPrj.svg" />}
              ></Button>
            </Link>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "team" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("team");
              }}
              variant="line"
              className="ml-[10px] "
              label="My Team Space"
              icon={<img src="/Assets/hamburger/MyTeam.svg" />}
            ></Button>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "provider" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("provider");
              }}
              variant="line"
              label="Provider list"
              className="ml-[10px] "
              icon={<img src="/Assets/hamburger/Providerlist.svg" />}
            ></Button>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "proposal" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("proposal");
              }}
              variant="line"
              className="ml-[10px] "
              label="Proposal"
              icon={<img src="/Assets/hamburger/proposal.svg" />}
            ></Button>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "Activity" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("Activity");
              }}
              variant="line"
              label="Activity History"
              icon={<img src="/Assets/hamburger/ActivityHistory.svg" />}
            ></Button>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "NFT" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("NFT");
              }}
              className="ml-[10px] "
              variant="line"
              label="NFT Library"
              icon={<img src="/Assets/hamburger/NFT.svg" />}
            ></Button>
          </div>
          <div
            className={`w-[300px] flex justify-center  ${
              active == "Dispute" ? "bg-primary-500" : " "
            }   `}
          >
            <Button
              onClick={() => {
                whichIsActive("Dispute");
              }}
              variant="line"
              className="ml-[10px] "
              label="Dispute"
              icon={<img src="/Assets/hamburger/Dispute.svg" />}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamBurgerOptions;
