import React, { HTMLAttributes, InputHTMLAttributes, useState } from "react";
interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  onChange?: any;
  disable?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  multiline?: boolean;
  defaultValue?: any;
  onClick?: any;
  value?: any;
  type?: string;
  className?: string;
  style?: Object;
  name?: string;
}

export const Textfield = ({
  placeHolder,
  onChange,
  disable = false,
  leftIcon,
  rightIcon,
  multiline = false,
  defaultValue,
  onClick,
  value,
  type = "text",
  className,
  style,
  name,
  ...props
}: TextfieldProps) => {
  return (
    <div className={`relative flex  w-full ${multiline ? "h-28" : "h-10"}`}>
      {multiline ? (
        <textarea
          className={`${className} ${
            disable
              ? " border-2 border-text-text-gray-50 opacity-40"
              : "active:border-light-primary-400 focus:border-light-primary-400 hover:border-light-primary-100"
          } placeholder:text-text-gray-50 text-text-gray-50 border p-2 outline-none resize-none rounded-[5px] w-[100%]`}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          disabled={disable}
          style={style}
          name={name}
        ></textarea>
      ) : (
        <>
          {leftIcon && (
            <button
              className={`${
                disable ? "opacity-40 cursor-default" : ""
              } absolute  left-[0.1rem] text-light-gray-900 outline-none flex justify-center items-center`}
              onClick={onClick}
            >
              {leftIcon}
            </button>
          )}
          <input
            id="input"
            className={`${className} ${
              disable
                ? "border-text-text-gray-50"
                : "active:border-light-primary-400 focus:border-text-gray-50   "
            } text-sm w-full placeholder:text-text-gray-50 text-light-gray-200 border-2 border-text-text-gray-50 rounded-[5px] outline-none
            ${leftIcon ? "pl-9 pr-2" : rightIcon ? "pr-9 pl-2" : "pl-2"}
        `}
            type={type}
            onChange={onChange}
            placeholder={placeHolder}
            defaultValue={defaultValue}
            value={value}
            disabled={disable}
            style={style}
            name={name}
            {...props}
          />
          {rightIcon && (
            <button
              className={`${
                disable ? "opacity-40 cursor-default" : ""
              } absolute  right-[0.1rem] text-light-gray-900 outline-none flex justify-center items-center`}
              onClick={onClick}
            >
              {rightIcon}
            </button>
          )}
        </>
      )}
    </div>
  );
};
