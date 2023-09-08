import React, { useState } from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "error";
  size?: "small" | "medium" | "large";
  label: string;
  disable?: boolean;
  variant?: "standard" | "line" | "Transparent";
  onClick?: any;
  icon?: string | any;
  style?: object;
  className?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  color = "primary",
  size = "medium",
  label,
  disable = false,
  variant = "standard",
  icon,
  style,
  className = "",
  loading = false,
  type = "button",
  ...props
}: ButtonProps) => {
  const sizeValues = {
    small: "h-8 ",
    medium: "h-10 ",
    large: "h-12",
  };

  const colorValues = {
    primary:
      variant == "standard"
        ? "bg-primary-300 text-text-white-50 font-base hover:shadow-button"
        : "text-light-primary-500 ",
    secondary:
      variant == "standard"
        ? "bg-white text-dark-primary-500"
        : "text-light-secondary-500 hover:shadow-button",
    error:
      variant == "standard"
        ? "bg-danger-50 text-danger-400"
        : "text-danger-500 hover:text-danger-600",
  };

  const ColorTransparent = {
    primary:
      variant == "Transparent"
        ? "border border-2 border-text-text-gray-50 font-base text-text-primary-200"
        : "text-light-primary-500",
    secondary:
      variant == "Transparent"
        ? " border border-2  border-text-secondary-50 font-base text-text-secondary-50 hover:bg-text-secondary-100 "
        : "",
    error: "",
  };

  const variantValues = {
    standard: ` w-full justify-center p-2 px-3 shadow-[1px_1px_5px_rgba(0,0,0,0.14)] border border-transparent box-border rounded-md 
    ${
      disable || loading
        ? "bg-dark-secondary-100 text-dark-secondary-300"
        : colorValues[color] +
          `${
            color == "error"
              ? " hover:bg-danger-500 hover:text-white"
              : " hover:shadow-button "
          }`
    } ${sizeValues[size]}`,
    line: `${
      disable || loading
        ? " w-full text-dark-secondary-300"
        : colorValues[color]
    } h-8 min-w-max justify-start`,

    Transparent: ` w-full bg-transparent  justify-center p-2 px-3  box-border rounded-md    ${
      disable || loading
        ? "bg-dark-secondary-100 text-dark-secondary-300"
        : ColorTransparent[color] +
          `${
            color == "error"
              ? " hover:bg-primary-50 hover:text-white"
              : " hover:shadow-button "
          }`
    } ${sizeValues[size]}`,
  };

  return (
    <button
      type={type}
      className={`${className}  bg-dan bg-sec flex items-center ${
        variantValues[variant]
      } ${sizeValues[size]} ${
        disable || loading ? "cursor-not-allowed" : "cursor-pointer"
      } ${icon ? "gap-1 " : ""}`}
      disabled={loading ? true : disable}
      style={{ ...style }}
      {...props}
    >
      {loading ? (
        <div className="min-w-min flex gap-2 justify-center">
          <div
            className={`animate-spin w-6 h-6 border rounded-full ${
              disable ? "border-white" : "border-gray-600"
            }`}
          ></div>
          loading...
        </div>
      ) : (
        <>
          {icon && <span className="">{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
};
