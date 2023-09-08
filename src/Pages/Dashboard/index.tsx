// import React from "react";
// import { useState } from "react";
// import { Typography } from "../../Components/Atoms/Typography";
// import { Button } from "../../Components/Atoms/button";
// import Card from "./Card";
// import ProjectSummary from "./ProjectSummary";
// import ProjectTab from "../PurchaserFlow/NewProject/ProjectTab";
// import DocumentsTab from "../PurchaserFlow/NewProject/Documents";
// import ProviderTab from "../PurchaserFlow/NewProject/ProviderTab";
// const Dashboard = () => {
//   const [UnAssignModalWarning, setUnAssignModalWarning] = useState(false);
//   function UnAssignedChange() {
//     setUnAssignModalWarning(true);
//   }

//   const [Active, SetActive] = useState<number | null>(0);

//   const handleClick = (index: number) => {
//     SetActive(index === Active ? null : index);
//   };

//   let a = [1, 2, 3, 4, 3];
//   let selectedValue;
//   let navPrj = ["Assigned", "Documents", "Provider"];

//   if (Active !== null) {
//     selectedValue = navPrj[Active];
//   } else {
//     console.log("Active is null");
//   }
//   let heading;
//   switch (selectedValue) {
//     case "Project Details":
//       heading = "New Project";
//       break;
//     case "Documents":
//       heading = "Fitness App UX/UI Design Project";
//       break;
//     case "Provider":
//       heading = "Fitness App UX/UI Design Project";
//       break;
//     default:
//       heading = "Dashboard";
//   }
//   return (
//     <div className="w-[100vw] mt-[20px] mr-[20px] ml-[20px] scroll-smooth pl-[62px] pr-[20px]">
//       <div className="flex flex-row justify-between  ">
//         <div className="">
//           <Typography
//             type="h1"
//             label={heading}
//             variant={50}
//             color="secondary"
//             FontSize="3xl"
//             classname="leading-[32px] "
//           />
//         </div>
//         <div>
//           {selectedValue === "Dashboard" && (
//             <Button
//               variant="standard"
//               color="primary"
//               label="Create New Project"
//               size="small"
//             />
//           )}
//           {(selectedValue === "Project Details" ||
//             selectedValue === "Documents" ||
//             selectedValue === "Provider") && (
//             <div className="flex space-x-[20px]">
//               <Button
//                 label="Discard"
//                 variant="Transparent"
//                 color="secondary"
//                 size="small"
//               />
//               <Button
//                 label="Save and Exit"
//                 variant="Transparent"
//                 color="secondary"
//                 onClick={UnAssignedChange}
//                 size="small"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       {/* //!inner content navb */}
//       <div className="flex mt-[20px] mr-[20px] ml-[20] space-x-5 ">
//         <div className="w-[100%]  ">
//           <div className="mt-[20px] flex justify-between border-b-2 border-text-gray-50">
//             <div className=" flex space-x-[10px] pt-[5px] ">
//               {navPrj.map((element, index) => {
//                 return (
//                   <div key={index}>
//                     <Button
//                       onClick={() => {
//                         handleClick(index);
//                       }}
//                       label={element}
//                       variant="line"
//                       color="primary"
//                       size="small"
//                       className={`ml-[5px] text-text-primary-300 ${
//                         index == Active
//                           ? "text-text-secondary-50 border-b-4 border-text-secondary-50"
//                           : " "
//                       }  `}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             {selectedValue === "Project Details" ||
//             selectedValue === "Documents" ||
//             selectedValue === "Provider" ? (
//               ""
//             ) : (
//               <div className="flex space-x-3">
//                 <Button
//                   icon={<img src="/Assets/Sort.svg" />}
//                   variant="Transparent"
//                   label="Sort By"
//                   size="small"
//                   color="secondary"
//                   className="text-sm "
//                 />

//                 <Button
//                   variant="Transparent"
//                   label="Filter By"
//                   size="small"
//                   color="secondary"
//                   icon={<img src="/Assets/Sort.svg" />}
//                 />
//               </div>
//             )}
//           </div>

//           {/* //! card  */}
//           {selectedValue == "Assigned" &&
//             a.map((Element, index) => {
//               return (
//                 <div key={index}>
//                   <Card />
//                 </div>
//               );
//             })}

//           {selectedValue == "Documents" && <DocumentsTab />}
//           {selectedValue == "Provider" && (
//             <ProviderTab modalSate={UnAssignModalWarning} />
//           )}
//           {selectedValue == "Project Details" && <ProjectTab />}
//         </div>

//         {selectedValue == "Assigned" && (
//           <div className="w-[30%]   ">
//             <div className="ml-[10px] mt-[35px] border-b-2 border-text-gray-50 ">
//               <Typography
//                 label="Project Summary"
//                 type="h2"
//                 FontSize="sm"
//                 classname="font-bold "
//                 color="primary"
//                 variant={200}
//               />
//             </div>
//             <ProjectSummary />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { useState } from "react";
import Structure from "../../Components/Molecules/Structure";
import Card from "./Card";
// import { ProjectSummary } from "./ProjectSummary";
import { Button } from "../../Components/Atoms/button";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";
import { Typography } from "../../Components/Atoms/Typography";

const Dashboard = () => {
  const [activeAssign, setactiveAssign] = useState<string>("Assign");
  const handleAssign = (activeName: string) => {
    setactiveAssign(activeName);
  };

  return (
    <>
      <Structure
        Heading="Dashboard"
        optionText={
          <>
            <Button
              variant="line"
              label="Assign"
              onClick={() => {
                handleAssign("Assign");
              }}
              className={`pl-[6px] text-text-primary-300 font-bold text-sm leading-5  ${
                activeAssign == "Assign"
                  ? "border-b-4 border-text-secondary-50 "
                  : ""
              } `}
            />
            <Button
              variant="line"
              label="UnAssign"
              onClick={() => {
                handleAssign("UnAssign");
              }}
              className={`pl-[6px] text-text-primary-300 font-bold text-sm leading-5  ${
                activeAssign == "UnAssign"
                  ? "border-b-4 border-text-secondary-50 "
                  : ""
              } `}
            />
          </>
        }
        TopButton={
          <Link to="/create-project">
            <Button
              variant="standard"
              color="primary"
              label="Create New Project"
            />
          </Link>
        }
        mainSection={
          <>
            <Card />
          </>
        }
        // sideComponent={<ProjectSummary />}
        sideComponetHeading={
          <>
            <Typography
              label="Project Summary"
              color="primary"
              variant={300}
              FontSize="sm"
              classname="font-bold leading-5 pb-[3px] "
              type="h2"
            />
          </>
        }
        sideComponent={
          <>
            <ProjectSummary />
          </>
        }
        Buttons={
          <>
            <Button
              label="Sort By"
              variant="Transparent"
              color="secondary"
              size="small"
            />
            <Button
              label="Filter By"
              variant="Transparent"
              color="secondary"
              size="small"
            />{" "}
          </>
        }
      />
    </>
  );
};

export default Dashboard;
