import React from "react";
import { Button } from "../../Components/Atoms/button";
import { Typography } from "../../Components/Atoms/Typography";
const Card = () => {
  return (
    <div className="flex md:flex-row md:flex-wrap md:justify-between xs:flex-col xs:items-center ">
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]   shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* //!card2 */}
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]  shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {//!card3} */}
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]  shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]  shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]  shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="md:w-[384px]    xs:w-[369px] lg:h-[280px] xs:h-[300px]  shadow-navbar mt-[9px] mb-[11px] pr-[15px] pl-[15px] ">
        <div className="flex  justify-between pt-[15px] ">
          <Typography
            label="Fitness App UX/UI Project"
            type="h3"
            classname=" text-text-HeadLine-50"
          />
          <div className="text-text-sucess-100 text-xxs font-medium bg-text-sucess-200 w-[67px] rounded-[2px] flex justify-center items-center h-[22px]">
            <span>In Progress</span>
          </div>
        </div>
        <div className="flex flex-col  space-y-[10px] ">
          <Typography
            label="Design"
            type="h3"
            variant={50}
            color="primary"
            FontSize="xxs"
            classname=" mt-[9px] "
          />
          <Typography
            label="HCL Technologies"
            type="h3"
            color="primary"
            variant={200}
            FontSize="xs"
            classname="font-bold "
          />
          <Typography
            label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing..."
            type="p"
            color="primary"
            variant={300}
            FontSize="xs"
            classname="leading-[16px] "
          />
          <div className="flex flex-row justify-between">
            <div className="flex space-x-[3px]">
              <Typography
                label="Milestone:"
                type="h3"
                color="primary"
                variant={300}
                FontSize="xxs"
                classname="font-medium "
              />
              <Typography
                label="2/3"
                type="h3"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>
            <div className="flex space-x-[3px]">
              <Typography
                label="Funds:"
                type="p"
                color="primary"
                variant={300}
                classname="font-medium "
                FontSize="xs"
              />
              <Typography
                label="200/500 $"
                type="p"
                color="primary"
                variant={200}
                classname="font-medium "
                FontSize="xs"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <Typography
                label="Burn"
                type="p"
                classname="font-medium text-text-pink-50 leading-[16px]"
                FontSize="xs"
              />
            </div>
            <div className="flex space-x-[5px]">
              <Typography
                label="Projected Burn Rate"
                type="p"
                classname="font-medium text-text-warning-50 "
                FontSize="xs"
              />
              <Typography
                label="Actual Burn Rate"
                type="p"
                classname="font-medium  text-text-HeadLine-100"
                FontSize="xs"
              />
            </div>
          </div>
          {/* //!progresssbar */}
        </div>
        <div className="h-[12px] w-[354px] rounded-sm bg-primary-400 flex justify-center"></div>
        {/* //!card Footer */}
        <div className="border-t-[1px] border-text-gray-50 mt-[8px] ">
          <div className=" flex justify-between ">
            <div className="pt-[15px] pb-[15px]">
              <Typography
                label="M3: June 21, 2023"
                type="p"
                color="primary"
                variant={200}
                FontSize="xs"
                classname="font-medium "
              />
            </div>

            <div className="w-[120px] pt-[8px] mr-[15px]">
              <Button
                label="see Details"
                variant="Transparent"
                color="secondary"
                size="small"
                icon={<img src="Assets/Next.svg" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
