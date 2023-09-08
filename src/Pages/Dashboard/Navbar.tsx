import React, { useState } from "react";
import Logo from "../../Components/Atoms/Logo";
import { Typography } from "../../Components/Atoms/Typography";
import { Textfield } from "../../Components/Atoms/Input";
import { Button } from "../../Components/Atoms/button";
import Notification from "../../Components/Atoms/SVG/Notification";
import StickyNote from "../../Components/Atoms/SVG/StickyNote";
import { HelperText } from "../../Components/Atoms/Typography/Helper";
import HamBurger from "../../Components/Atoms/SVG/HamBurger";
import Model from "../../Components/Molecules/Modal/Model";
import HamBurgerOptions from "../../Components/Molecules/Modal/HamBurgerOptions";
import CloseHamBurger from "../../Components/Atoms/SVG/CloseHamBurger";
import HamburgerEffect from "../../Components/Molecules/Modal/HamburgerEffect";

const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu); // Toggle the menu state
  };

  return (
    <>
      {OpenMenu ? <HamburgerEffect /> : ""}

      <div className="sticky top-0 z-40 right-0">
        <div className="h-[62px] bg-primary-100 shadow-navbar">
          <div className="flex fex-row justify-between pl-[20px] pr-[20px] lg:hidden">
            <div className="w-[97px]">
              <Logo />
            </div>
            <div className="flex justify-evenly items-center space-x-[10px]">
              <Notification />
              <StickyNote />
              <Button
                icon={OpenMenu ? <CloseHamBurger /> : <HamBurger />}
                label=""
                variant="line"
                onClick={toggleMenu} // Use the toggleMenu function
              />
            </div>
          </div>
          {/* ... (rest of your code) */}
          <div className="lg:flex items-center justify-evenly xs:hidden">
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
              <Button label="" variant="line" icon={<Notification />} />

              <Button label="" variant="line" icon={<StickyNote />} />
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
