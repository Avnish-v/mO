import React from "react";
import { Typography } from "../../../Components/Atoms/Typography";
import { Textfield } from "../../../Components/Atoms/Input";
import { Button } from "../../../Components/Atoms/button";
import UnAssign from "../../../Components/Molecules/Modal/UnAssign";
import Model from "../../../Components/Molecules/Modal/Model";

const Project = (props: any) => {
  const { SaveExit, handleCloseModal } = props;
  return (
    <>
      {SaveExit ? (
        <Model children={<UnAssign close={handleCloseModal} />} />
      ) : (
        ""
      )}
      <div className="flex  flex-col items-center mt-[12px]  ">
        <div className="lg:w-[828px] lg:h-[556px]   shadow-navbar p-[20px]  ">
          <div className="border-b-[1px] border-text-primary-100-[1px] border-text-primary-100 ">
            <Typography
              label="Project Details"
              type="h2"
              FontSize="base"
              classname="text-text-HeadLine-100 font-bold leading-6 "
            />
          </div>

          <div className="flex md:space-x-[20px] mt-[10px] md:flex-wrap xs:flex-col xs:items-center md:flex-row xs:space-y-[20px]">
            <div className="w-[384px]">
              <Typography
                label="Title"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />

              <Textfield placeHolder="Title of project" />
            </div>
            <div className="w-[384px] xs:mb-[20px] md:mb-[0px]">
              <Typography
                label="Category"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />
              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
          </div>
          <div className="flex md:space-x-[20px] mt-[10px] xs:flex-col xs:items-center xs:space-y-[20px] md:flex-row">
            <div className="w-[384px]">
              <Typography
                label="Project Duration"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />

              <Textfield placeHolder="Define duration of project" />
            </div>
            <div className="w-[384px] xs:mb-[20px] md:mb-[0px] ">
              <Typography
                label="Select Currency"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />

              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
          </div>
          <div className="w-[384px] mt-[10px] ">
            <Typography
              label="Total Project Fund"
              type="p"
              FontSize="sm"
              color="primary"
              variant={200}
              classname="font-bold "
            />
            <Textfield placeHolder="Allocate fund to this project" />
          </div>
          <div className="h-[128px] mt-[10px]">
            <Typography
              label="Project Scope"
              type="p"
              FontSize="sm"
              color="primary"
              variant={200}
              classname="font-bold "
            />

            <Textfield
              placeHolder="Define project scope of project"
              multiline={true}
            />
          </div>
          <div className="h-[128px] mt-[10px]">
            <Typography
              label="Deliverables"
              type="p"
              FontSize="sm"
              color="primary"
              variant={200}
              classname="font-bold "
            />

            <Textfield
              placeHolder="Define project deliverables"
              multiline={true}
            />
          </div>
        </div>

        <div className="flex mt-[20px] space-x-[20px] xs:flex-col xs:items-center lg:flex-row">
          <div className="shadow-navbar w-[404px] h-[218px]">
            <div className=" pt-[20px] pb-[10px] pl-[20px] border-b-[1px] border-text-primary-100-2">
              <Typography
                label="Release fund from Wallet to ESCROW"
                type="h2"
                classname="text-text-HeadLine-100 font-bold leading-6 "
                FontSize="base"
              />
            </div>
            <div className="p-[20px]">
              <Typography
                label="Select Currency"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />

              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
              <Typography
                label="Select Currency"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold mt-[10px] "
              />

              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
          </div>
          <div className="shadow-navbar w-[404px] h-[218px] xs:flex xs:flex-col xs:space-y-[20px] ">
            <div className=" pt-[20px] pb-[10px] pl-[20px] border-b-[1px] border-text-primary-100-2">
              <Typography
                label="Release fund from Wallet to ESCROW"
                type="h2"
                classname="text-text-HeadLine-100 font-bold leading-6 "
                FontSize="base"
              />
            </div>
            <div className="p-[20px]">
              <Typography
                label="Select Currency"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold "
              />

              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
              <Typography
                label="Select Currency"
                type="p"
                FontSize="sm"
                color="primary"
                variant={200}
                classname="font-bold mt-[10px] "
              />

              <select
                name="EscrowCurrency"
                id="EscrowCurrency"
                placeholder="Select type of Fund Release"
                className="w-[364px] h-[40px] border broder-[1px] border-text-gray-50 rounded-[5px] text-text-primary-300 outline-none  text-sm"
              >
                <option value="milestone">Milestone</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* //! button */}
      <div className="mt-[20px] mb-[20px] flex justify-center lg:justify-end ">
        <div className="w-[167px]">
          <Button
            label="Save and Continue"
            variant="standard"
            color="primary"
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
