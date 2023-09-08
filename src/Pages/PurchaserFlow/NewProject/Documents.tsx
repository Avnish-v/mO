import React from "react";
import { Typography } from "../../../Components/Atoms/Typography";
import { Button } from "../../../Components/Atoms/button";
import { Textfield } from "../../../Components/Atoms/Input";
import { HelperText } from "../../../Components/Atoms/Typography/Helper";
import UnAssign from "../../../Components/Molecules/Modal/UnAssign";

const Documents = (props: any) => {
  const { SaveExit, handleCloseModal } = props;
  console.log(handleCloseModal);

  return (
    <>
      {SaveExit ? <UnAssign close={handleCloseModal} /> : ""}
      <div className="flex flex-col items-center mt-[10px] mb-[20px] space-y-[20px]">
        <div className="w-[450px] lg:w-[828px] md:w-[728px] sm:w-[628px] xs-[528px]  shadow-navbar">
          <div className="pt-[20px] pb-[10px] pl-[20px] border-b-[1px] border-text-gray-50">
            <Typography
              classname="text-text-HeadLine-50 font-bold leading-6 "
              type="h2"
              label="Requirement Details"
              FontSize="base"
            />
          </div>
          <div className="flex flex-col p-[20px]">
            <Typography
              label="Project Title"
              type="h3"
              FontSize="sm"
              color="primary"
              classname="font-bold mb-[3px]  "
              variant={200}
            />
            <Textfield multiline={true} />
            <div className="mt-[10px] flex space-x-[20px]">
              <Typography
                label="Research"
                type="p"
                color="primary"
                variant={200}
                classname="font-bold "
                FontSize="sm"
              />
              <Typography
                label="519  KB"
                type="p"
                color="primary"
                variant={300}
                FontSize="sm"
              />
              <HelperText
                icon={<img src="/Assets/Error.svg" className="mt-[3px]" />}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="w-[159px] pb-[20px]">
              <Button
                label="Add Attachments"
                color="secondary"
                variant="Transparent"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[828px] md:w-[700px] sm:w-[600px] xs:w-[500px] w-[450px] h-[292px] shadow-navbar">
          <div className="pt-[20px] pb-[10px] pl-[20px] border-b-[1px] border-text-gray-50">
            <Typography
              classname="text-text-HeadLine-50 font-bold leading-6 "
              type="h2"
              label="Term and Condition Details"
              FontSize="base"
            />
          </div>
          <div className="flex flex-col p-[20px]">
            <Typography
              label="Project Title"
              type="h3"
              FontSize="sm"
              color="primary"
              classname="font-bold leading-5 mb-[3px] "
              variant={200}
            />
            <Textfield multiline={true} />
            <div className="mt-[10px] flex space-x-[20px]">
              <Typography
                label="TnC’s"
                type="p"
                color="primary"
                variant={200}
                classname="font-bold "
                FontSize="sm"
              />
              <Typography
                label="519  KB"
                type="p"
                color="primary"
                variant={300}
                FontSize="sm"
              />
              <HelperText
                icon={<img src="/Assets/Error.svg" className="mt-[3px]" />}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="w-[159px] pb-[20px]">
              <Button
                label="Add Attachments"
                color="secondary"
                variant="Transparent"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-[20px]">
        <div className="w-[100px]">
          <Button
            label="back"
            color="secondary"
            variant="Transparent"
            size="small"
          />
        </div>

        <div className="w-[167px]">
          <Button
            label="Save and Continue"
            color="primary"
            variant="standard"
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default Documents;
