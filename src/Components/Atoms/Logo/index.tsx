import React from "react";

interface logoInterface {
  position?: "start" | "end" | "center" | undefined;
}
const Logo = (props: logoInterface) => {
  const { position = "start" } = props;
  let positioning;
  if (position === "start") {
    positioning = "flex justify-start";
  } else if (position === "center") {
    positioning = "flex justify-center";
  } else if (position === "end") {
    positioning = "flex justify-end";
  }

  return (
    <div className={`${positioning} mt-[10px] ml-[10px]`}>
      <img src="/Assets/MO LOGO.svg" alt="LOGO" />
    </div>
  );
};

export default Logo;
