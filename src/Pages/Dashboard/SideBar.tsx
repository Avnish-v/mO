import React from "react";
import { Button } from "../../Components/Atoms/button";

const SideBar = () => {
  return (
    <>
      <div
        className="w-[50px] shadow-sideBar  bg-primary-100 
    sidebarHeight   "
      >
        <div className="flex flex-col  items-center  space-y-[15px] overflow-y-auto">
          <div className="mt-[16px]">
            <Button
              label=""
              variant="line"
              icon={<img src="/Assets/Dashboard.svg"></img>}
            />
          </div>
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/BookLibrary.svg"></img>}
          />
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/AccountGrp.svg"></img>}
          />{" "}
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/Diversity.svg"></img>}
          />
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/BusinessOutline.svg"></img>}
          />
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/BaseLineHistory.svg"></img>}
          />
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/Fluent_library.svg"></img>}
          />
          <Button
            label=""
            variant="line"
            icon={<img src="/Assets/gravel.svg"></img>}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
