import React, { useState } from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "error";
  size?: "small" | "medium" | "large";
  label: string;
  disable?: boolean;
  variant?: "standard" | "line";
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
    small: "h-7 min-w-[144px]",
    medium: "h-8 min-w-[144px]",
    large: "h-10 min-w-[144px]",
  };

  const colorValues = {
    primary:
      variant == "standard"
        ? "bg-primary-300 text-text-white-50 font-base"
        : "text-light-primary-500 ",
    secondary:
      variant == "standard"
        ? "bg-white text-dark-primary-500"
        : "text-light-secondary-500 hover:text-light-primary-700",
    error:
      variant == "standard"
        ? "bg-danger-50 text-danger-400"
        : "text-danger-500 hover:text-danger-600",
  };

  const variantValues = {
    standard: `justify-center p-2 px-3 shadow-[1px_1px_5px_rgba(0,0,0,0.14)] border border-transparent box-border rounded-md 
    ${
      disable || loading
        ? "bg-dark-secondary-100 text-dark-secondary-300"
        : colorValues[color] +
          `${
            color == "error"
              ? " hover:bg-danger-500 hover:text-white"
              : " hover:bg-[#00338D] hover:text-white"
          }`
    } ${sizeValues[size]}`,
    line: `${
      disable || loading ? "text-dark-secondary-300" : colorValues[color]
    } h-8 min-w-max justify-start`,
  };

  return (
    <button
      type={type}
      className={`${className} text-sm bg-dan bg-sec flex items-center ${
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
          {icon && <span>{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
};
