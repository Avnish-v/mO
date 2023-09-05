import { useState } from "react";
import react from "react";
import { Typography } from "../../Components/Atoms/Typography";
import { Button } from "../../Components/Atoms/button";
import { Link } from "react-router-dom";
import { HelperText } from "../../Components/Atoms/Typography/Helper";

const Wallet = () => {
  const [OnConnect, setOnConnect] = useState();
  return (
    <>
      <div className="mt-[50px]">
        <Typography
          label="Connect Wallet"
          FontSize="2xl"
          type="h1"
          color="primary"
          variant={200}
        />
      </div>

      <div className="w-[132px] h-[132px]  mt-[40px] border border-gray-100 rounded shadow-button">
        <div className="flex flex-col items-center ">
          <div className="pt-[25px]">
            <img src="Assets/HashPack.svg" width="49.5px"></img>
          </div>
          <Typography
            label="HashPack"
            type="p"
            FontSize="base"
            classname="mt-2 "
            color="primary"
            variant={200}
          />
        </div>
      </div>
      <div className="w-[138px] mt-[30px]">
        <Button label="connect" variant="standard" disable={false} />
      </div>
      <div className="mt-[30px] flex ">
        <div className="mr-[-15px]">
          <Typography
            FontSize="xs"
            label="By Connecting your wallet, you agree to our "
            type="p"
            color="primary"
            variant={300}
          />
        </div>

        <HelperText
          label="Terms of Services"
          color="secondary"
          className="text-xs mt-[-3px]"
        ></HelperText>
        <div className="ml-[6px] ">
          <Typography
            FontSize="xs"
            label="and"
            type="p"
            color="primary"
            variant={300}
          />
        </div>
        <div className="ml-[-15px] mt-[-3px]">
          <HelperText
            label="Privacy Policy"
            color="secondary"
            className=" text-xs "
          ></HelperText>
        </div>
      </div>

      <div className="mt-[50px]">
        <Typography
          FontSize="base"
          label="Please remember that all transactions on our platform are conducted using USDC hts  and HBAR cryptocurrencies."
          type="p"
          classname="text-text-danger-100"
        />
      </div>
    </>
  );
};

export default Wallet;
