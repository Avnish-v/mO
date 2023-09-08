import React from "react";
import { Button } from "../../Atoms/button";
import { Typography } from "../../Atoms/Typography";
import { Textfield } from "../../Atoms/Input";
import { HelperText } from "../../Atoms/Typography/Helper";

const Modal = (props: any) => {
  const { status } = props;

  let data = [
    {
      name: "Jenny Miles",
      role: "Project Manager",
      url: "/Assets/people/jenny.png",
      status: "remove",
      ID: 22896,
    },
    {
      name: "Arlene Miles",
      role: "Project Manager",
      url: "/Assets/people/Arlene.png",
      status: "Add Provider",
      ID: 22896,
    },
    {
      name: "Bessie Cooper",
      role: "Project Manager",
      url: "/Assets/people/Bessie.png",
      status: "Add Provider",
      ID: 22896,
    },
    {
      name: "Ronald Richards",
      role: "Project Manager",
      url: "/Assets/people/ronald.png",
      status: "Add Provider",
    },
    {
      name: "Theresa Webb",
      role: "Project Manager",
      url: "/Assets/people/theresa.png",
      status: "Add Provider",
      ID: 22896,
    },
  ];
  return (
    <>
      <div className="fixed inset-0 pl-[20px] flex justify-center items-center z-50">
        <div className="w-[1178px]  shadow-popUps bg-white rounded-[5px]">
          {/* //nav */}
          <div className="h-[50px] bg-primary-100 flex justify-between items-center pr-4">
            <Typography
              label="Add Provider"
              type="h1"
              classname="text-white font-bold pl-[15px] "
              FontSize="base"
            />
            <Button
              label=""
              icon={<img src="Assets/Close.svg" />}
              variant="line"
              className="pr-[15px] "
              onClick={status}
            />
          </div>
          {/* //!search */}
          <div className="w-[350px] h-[32px] pt-[20px] pl-[20px] border-text-gray-50 border-1">
            <Textfield
              type="search"
              placeHolder="Search name, skill or user id"
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
          {/* //!body */}
          <div className="flex p-[20px] mt-[26px] space-x-[20px]">
            <div className="w-[66%]">
              <div className="flex justify-between border-b-[1px]">
                <Typography label="Individual Provider’s List" type="h2" />
                <div className="flex space-x-[26px] pb-[5px]">
                  <Button
                    label="Sort by"
                    size="small"
                    variant="Transparent"
                    color="secondary"
                  />

                  <Button
                    label="Filter"
                    size="small"
                    variant="Transparent"
                    color="secondary"
                  />
                </div>
              </div>
              {/* //!card */}
              <div className="rounded-[5px]  shadow-navbar h-[370px]  mt-[10px] overflow-y-scroll ">
                <div className="flex flex-col">
                  {data.map((Element, index) => {
                    let id = Element.ID;
                    id?.toString();
                    return (
                      <div
                        key={Element.ID}
                        className="h-[74px]   border-b-[1px] border-text-gray-50 flex"
                      >
                        <div className="mt-[10px] ml-[10px] mb-[14px]  ">
                          <img
                            src={Element.url}
                            alt="error"
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col pl-[13px] pt-[9px] w-[100%]">
                          <Typography
                            label={Element.name}
                            type="p"
                            FontSize="base"
                            color="primary"
                            variant={200}
                            classname="font-medium leading-6 "
                          />
                          <Typography
                            label={Element.role}
                            type="p"
                            FontSize="xs"
                            color="primary"
                            variant={300}
                            classname=" leading-4 "
                          />
                          <div className="flex">
                            <Typography
                              label="ID:"
                              type="p"
                              FontSize="xs"
                              color="primary"
                              variant={300}
                              classname=" leading-4 "
                            />
                            <Typography
                              label={id}
                              type="p"
                              FontSize="xs"
                              color="primary"
                              variant={300}
                              classname=" leading-4 "
                            />
                          </div>
                        </div>
                        <div className="flex justify-end items-center m-[20px]">
                          <Button
                            label={Element.status}
                            variant="Transparent"
                            color="secondary"
                            size="small"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* //!right */}
            <div className="w-[30%] ">
              <div className="border-b-[1px] pb-[5px]">
                <Typography label="Invite Through Mail" type="h2" />
              </div>
              <div className="flex flex-col space-y-[20px] ">
                <div className="w-[366px] h-[54px] shadow-navbar rounded-[5px] mt-[10px]">
                  <div className="flex p-[10px] space-x-[10px]">
                    <Textfield />

                    <div>
                      <Button
                        size="small"
                        label="Add Mail"
                        variant="Transparent"
                        color="secondary"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] pb-[5px]">
                  <Typography label="Providers" type="h2" />
                </div>
                {/* //!providerlist */}
                <div className="w-[366px] h-[236px] shadow-navbar">
                  <div className="m-[10px] border-[1px] border-text-gray-50 w-[346px] h-[176px] rounded-[5px] ">
                    <div className="flex flex-wrap space-x-[10px] p-[10px] ">
                      <Typography
                        label="Jenny Miles"
                        type="p"
                        variant={200}
                        color="primary"
                        FontSize="sm"
                      />
                      <HelperText
                        label=""
                        icon={
                          <img src="/Assets/Error.svg" className="mt-[3px]" />
                        }
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mr-[20px] ">
                    <Button
                      label=" Clear list "
                      variant="line"
                      size="small"
                      className="text-text-secondary-50 "
                    />
                  </div>
                </div>
                <div className="flex justify-end mr-[20px]">
                  <div className="w-[100px]">
                    <Button
                      label="Confirm"
                      size="small"
                      variant="standard"
                      color="primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
