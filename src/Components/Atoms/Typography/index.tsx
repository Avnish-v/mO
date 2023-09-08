import React from "react";

interface TypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "p";
  label: any;
  color?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "pink"
    | "HeadLine"
    | "Hold"
    | "success"
    | "white"
    | "secondary"
    | "gray"
    | string;
  variant?: number | 50 | 100 | 300 | 200 | 400;
  family?: "default" | "Roboto" | "poppins";
  FontSize?: string;
  classname?: string;
}
export const Typography: React.FC<TypographyProps> = ({
  type,
  variant = 100,
  FontSize = "xl",
  color = "default",
  label,
  classname = "",
  family = "Roboto",
  ...rest
}) => {
  let getColorVariants = (variant: number | undefined, color: string) => {
    switch (color) {
      case "primary":
        switch (variant) {
          case 50:
            return "text-text-primary-50";
          case 100:
            return "text-text-primary-100";
          case 200:
            return "text-text-primary-200";
          case 300:
            return "text-text-primary-300";
          default:
            return "";
        }
      case "secondary":
        switch (variant) {
          case 50:
            return "text-text-secondary-50";
          case 100:
            return "text-text-secondary-100";
          case 200:
            return "text-text-secondary-200";
          case 300:
            return "text-text-secondary-300";
          default:
            return "";
        }

      default:
        return "";
    }
  };
  let getFont = (FontSize: string) => {
    switch (FontSize) {
      case "xxs":
        return "text-xxs";
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "base":
        return "text-base";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      case "3xl":
        return "text-3xl";
      case "4xl":
        return "text-4xl";
      case "5xl":
        return "text-5xl";
      case "6xl":
        return "text-6xl";
      case "7xl":
        return "text-7xl";
      default:
        return "text-base";
    }
  };
  const getType = (
    label: string,
    type: TypographyProps["type"],
    variant: TypographyProps["variant"],
    classname: string,
    family: String
  ) => {
    let ColorVar = getColorVariants(variant, color);
    let font = getFont(FontSize);
    classname += `${ColorVar} ${font}`;
    switch (type) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "p":
        return React.createElement(type, { className: classname }, label);
      default:
        return null;
    }
  };
  const fontElement = getType(label, type, variant, classname, family);
  return <>{fontElement}</>;
};
