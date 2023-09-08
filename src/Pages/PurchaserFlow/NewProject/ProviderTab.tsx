import React from "react";
import { Typography } from "../../../Components/Atoms/Typography";
import { Textfield } from "../../../Components/Atoms/Input";
import { useState } from "react";
import { Button } from "../../../Components/Atoms/button";
import Modal from "../../../Components/Molecules/Modal";
import Sucess from "../../../Components/Molecules/Modal/Sucess";
import UnAssign from "../../../Components/Molecules/Modal/UnAssign";
import Model from "../../../Components/Molecules/Modal/Model";

const ProviderTab = (props: any) => {
  // const { modalState } = props;
  const [modalStatus, setmodalStatus] = useState(false);
  const [SucessModal, setSucessModal] = useState(false);
  const [UnAssigned, setUnAssigned] = useState(false);
  const { SaveExit, handleCloseModal } = props;
  console.log("this is form ", SaveExit, "and ", handleCloseModal);

  const openModal = () => {
    setmodalStatus(true);
  };
  const closeModal = () => {
    setmodalStatus(false);
  };

  const openSucessModal = () => {
    setSucessModal(true);
  };
  const closeSucessModal = () => {
    setSucessModal(false);
  };

  return (
    <div>
      {SucessModal && <Model children={<Sucess close={closeSucessModal} />} />}
      {SaveExit ? (
        <Model children={<UnAssign close={handleCloseModal} />} />
      ) : (
        ""
      )}
      {/* {modalState && <UnAssign />} */}
      {modalStatus ? <Model children={<Modal status={closeModal} />} /> : ""}
      <>
        <div className=" flex flex-col items-center mt-[10px] ">
          <div className="w-[828px] h-[324px] shadow-navbar">
            <div className="pt-[20px] pb-[10px] pl-[20px] border-b-[1px] border-text-gray-50">
              <Typography
                classname="text-text-HeadLine-50 font-bold leading-6 "
                type="h2"
                label="Assisgn Provider"
                FontSize="base"
              />
            </div>
            <div className="p-[20px]">
              <div className="flex justify-between">
                <div>
                  <Typography
                    label="Project Title"
                    type="h3"
                    FontSize="sm"
                    color="primary"
                    classname="font-bold leading-5 "
                    variant={200}
                  />
                  <Typography
                    label="Fitness App UX/UI Design Project"
                    type="p"
                    color="primary"
                    classname="leading-5 mt-[3px] "
                    FontSize="sm"
                    variant={300}
                  />
                </div>
                <div>
                  <Typography
                    label="Category"
                    type="h3"
                    FontSize="sm"
                    color="primary"
                    classname="font-bold leading-5 "
                    variant={200}
                  />
                  <Typography
                    label="Design"
                    type="p"
                    color="primary"
                    classname="leading-5 mt-[3px] "
                    FontSize="sm"
                    variant={300}
                  />
                </div>
              </div>
              <div className="mt-[10px]">
                <Typography
                  label="Description"
                  type="h3"
                  FontSize="sm"
                  color="primary"
                  classname="font-bold leading-5 "
                  variant={200}
                />
                <Typography
                  label="We are seeking a talented and experienced UX/UI designer to create an engaging and user-friendly fitness application. The goal of this project is to design intuitive and visually appealing interfaces that will enhance the user experience of our fitness app."
                  type="p"
                  color="primary"
                  classname="leading-5 mt-[3px] "
                  FontSize="sm"
                  variant={300}
                />
              </div>
              <div className="mt-[10px] ">
                <div className="flex">
                  <Typography
                    label="Provider"
                    type="h3"
                    FontSize="sm"
                    color="primary"
                    classname="font-bold leading-5 "
                    variant={200}
                  />
                  <Typography
                    label="(optional)"
                    type="h3"
                    FontSize="sm"
                    color="primary"
                    classname="leading-5 "
                    variant={200}
                  />
                </div>

                <div className="h-[40px] mt-[2px]">
                  <Textfield />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <Button
                  variant="standard"
                  color="primary"
                  label="Add Provider"
                  size="small"
                  onClick={openModal}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-[20px]">
          <div>
            <Button
              variant="Transparent"
              color="secondary"
              label="Back"
              size="small"
            />
          </div>
          <div>
            <Button
              variant="standard"
              color="primary"
              label="Save and Continue"
              size="small"
              onClick={openSucessModal}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ProviderTab;
