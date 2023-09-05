import React from "react";
import Logo from "../../Components/Atoms/Logo";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
import { Button } from "../../Components/Atoms/button";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 right-0">
        <div className="h-[62px] bg-primary-100 shadow-navbar">
          <div className="flex items-center justify-evenly ">
            <div className="w-[97px]">
              <Logo />
            </div>
            <div className="lg:w-[786px] lg:h-[36px]  border-text-gray-50 border-1">
              <Textfield
                type="search"
                placeHolder="Search freelancer/projects"
                rightIcon={
                  <img
                    src="/Assets/search.svg"
                    height="36px"
                    width="36px"
                    className="rounded-[5px] mt-[1.5px]"
                  ></img>
                }
              />
            </div>
            <div className="flex  space-x-[10px]">
              <Button
                label=""
                variant="line"
                icon={<img src="/Assets/NotificationIcon.svg"></img>}
              />

              <Button
                label=""
                variant="line"
                icon={<img src="/Assets/StickyNote.svg"></img>}
              />
              <div className="w-144px">
                <Button
                  icon={
                    <img
                      src="/Assets/WalletConnect.svg"
                      className="pr-[5px]"
                    ></img>
                  }
                  label="Connect Wallet"
                  variant="Transparent"
                  className="text-white"
                  color="primary"
                  size="small"
                />
              </div>

              <Button
                icon={<img src="/Assets/ProfileCircle.svg"></img>}
                label=""
                variant="line"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
