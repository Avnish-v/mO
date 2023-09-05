import React from "react";

interface HelperTextProps {
  label?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "error"
    | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: object;
  classNameOfLabel?: string;
  styleOfLabel?: object;
}

/**
 * Primary UI component for user interaction
 *
 */

export const HelperText = (props: HelperTextProps) => {
  const {
    label,
    color = "default",
    icon,
    iconPosition = "left",
    classNameOfLabel,
    styleOfLabel,
    className,
    style,
  } = props;

  //   const customFontSize: "";

  const getColor = (color: string) => {
    let classes = "";
    switch (color) {
      case "primary":
        classes = `text-text-primary-50`;
        break;
      case "secondary":
        classes = `text-text-secondary-50 `;
        break;
      case "success":
        classes = `text-text-success-500`;
        break;
      case "error":
        classes = `text-text-danger-500`;
        break;
      case "info":
        classes = `text-text-gray-50`;
        break;
      case "warning":
        classes = `text-warning-500`;
        break;
      case "danger":
        classes = `text-text-danger-50`;
        break;
      case "default":
        classes = `text-dark-secondary-400`;
        break;

      default:
        classes = `text-light-primary-500`;
        break;
    }
    return classes;
  };

  const customColor =
    color !== "default" &&
    color !== "primary" &&
    color !== "secondary" &&
    color !== "success" &&
    color !== "danger" &&
    color !== "warning" &&
    color !== "info" &&
    color !== "error" &&
    color;

  return (
    <div
      className={`${className} flex justify-start items-baseline ${
        iconPosition === "left" ? "flex-row " : "flex-row-reverse"
      } gap-x-1  w-max ${
        customColor ? `text-[${customColor}]` : getColor(color)
      }`}
      style={{ ...style }}
    >
      <div className={`h-4 w-4`}>{icon && icon}</div>

      <p className={`${classNameOfLabel}`} style={{ ...styleOfLabel }}>
        {label}
      </p>
    </div>
  );
};
