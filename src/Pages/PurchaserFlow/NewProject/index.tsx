import React from "react";
import Structure from "../../../Components/Molecules/Structure";
import ProviderTab from "./ProviderTab";
import { useState } from "react";
import Project from "./ProjectTab";
import Documents from "./Documents";
import { Button } from "../../../Components/Atoms/button";
import ProjectSummary from "../../Dashboard/ProjectSummary";
import Card from "../../Dashboard/Card";
import { Link } from "react-router-dom";
const NewProject = () => {
  const [activeBtn, setactiveBtn] = useState<string>("Project Details");
  const [ModalUnAssign, setModalUnAssign] = useState(false);

  function handleClick(btnName: string) {
    setactiveBtn(btnName);
  }

  const handleModal = () => {
    setModalUnAssign(true);
  };
  const handleCloseModal = () => {
    setModalUnAssign(false);
  };
  let activeSection;
  switch (activeBtn) {
    case "Project Details":
      activeSection = (
        <Project SaveExit={ModalUnAssign} handleCloseModal={handleCloseModal} />
      );
      break;
    case "Document":
      activeSection = (
        <Documents
          SaveExit={ModalUnAssign}
          handleCloseModal={handleCloseModal}
        />
      );
      break;
    case "Provider":
      activeSection = (
        <ProviderTab
          SaveExit={ModalUnAssign}
          handleCloseModal={handleCloseModal}
        />
      );
      break;
    default:
      activeSection = (
        <Project SaveExit={ModalUnAssign} handleCloseModal={handleCloseModal} />
      );
  }
  return (
    <>
      <Structure
        Heading={`${
          activeBtn == "Project Details"
            ? "New Project"
            : "Fitness App UX/UI Design Project"
        }`}
        mainSection={activeSection}
        TopButton={
          <>
            <Link to="/">
              <Button
                variant="Transparent"
                color="secondary"
                label="Discard"
                className=" "
              />
            </Link>

            <Button
              variant="Transparent"
              color="secondary"
              label="Save and Exit"
              className=" "
              onClick={handleModal}
            />
          </>
        }
        optionText={
          <>
            <Button
              variant="line"
              label="Project Details"
              className={`pl-[6px] text-text-primary-300 font-bold text-sm leading-5 ${
                activeBtn == "Project Details"
                  ? "border-b-4 border-text-secondary-50 "
                  : ""
              }  `}
              onClick={() => {
                handleClick("Project Details");
              }}
            />
            <Button
              variant="line"
              label="Document"
              onClick={() => {
                handleClick("Document");
              }}
              className={`pl-[6px] text-text-primary-300 font-bold text-sm leading-5  
              ${
                activeBtn == "Document"
                  ? "border-b-4 border-text-secondary-50 "
                  : ""
              }
               `}
            />
            <Button
              variant="line"
              label="Provider"
              onClick={() => {
                handleClick("Provider");
              }}
              className={`pl-[6px] text-text-primary-300 font-bold text-sm leading-5  ${
                activeBtn == "Provider"
                  ? "border-b-4 border-text-secondary-50 "
                  : ""
              } `}
            />
          </>
        }
      />
    </>
  );
};

export default NewProject;
