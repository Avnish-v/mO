import React from "react";
import { useState } from "react";
import Logo from "../Atoms/Logo";
import { Button } from "../Atoms/button";
interface Profile {
  items?: Array<string>;
}

export const SignUpProfile = (props: Profile) => {
  const [Active, SetActive] = useState<number | null>(0);

  const { items } = props;
  const handleClick = (index: number) => {
    SetActive(index === Active ? null : index);
  };
  return (
    <>
      <div className="flex justify-center ">
        {items &&
          items.map((element, index) => {
            const isActive = index === Active;
            return (
              <div key={index} className=" border-b border-text-primary-300">
                <div className="ml-[7px] mr-[7px]">
                  <Button
                    label={element}
                    variant="line"
                    color="primary"
                    size="large"
                    className={` pb-[20px] text-4xl text-text-gray-50  ${
                      isActive
                        ? "text-4xl active:font-bold text-text-secondary-50 border-b-4 border-text-secondary-50"
                        : ""
                    } `}
                    onClick={() => {
                      handleClick(index);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
