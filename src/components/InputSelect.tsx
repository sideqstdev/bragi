import React, {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  ReactNode,
} from "react";
import { useTheme } from "../theme/theme.provider";
import { inputScale } from "./InputArea";
import { XSHeader } from "./Typography";

export interface inputSelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  scale?: keyof typeof inputScale;
  stretch?: boolean;
  variant?: "default" | "alt";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  error?: string;
}

const InputSelect: React.FC<inputSelectProps> = ({
  stretch = false,
  scale = `default`,
  variant,
  iconRight,
  iconLeft,
  label,
  error,
  ...props
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  let variantObj;
  let stretched = stretch ? `w-full` : `w-max`;

  const inputVariant = {
    default: `bg-${theme}-box-box2 focus:bg-${theme}-box-box2`,
    alt: `bg-${theme}-box-box1 focus:bg-${theme}-box-box1`,
  };

  switch (variant) {
    case "alt":
      variantObj = inputVariant.alt;
      break;
    default:
      variantObj = inputVariant.default;
      break;
  }

  return (
    <div
      className={`${
        props.className ? props.className : ``
      } flex flex-col ${stretched}`}
    >
      <label className={`flex flex-row justify-between`}>
        {label ? (
          <XSHeader className={`text-${theme}-disabled text-xxs w-max`}>
            {label}
          </XSHeader>
        ) : null}
        {error ? (
          <XSHeader
            className={`text-${theme}-danger text-xxs text-right w-full`}
          >
            {error}
          </XSHeader>
        ) : null}
      </label>
      <div
        className={`${inputScale[scale]} ${
          error ? `ring-1 ring-dark-danger` : ``
        } ${variantObj} ${stretched} flex items-center rounded-md`}
      >
        <span className={`flex items-center`}>
          {iconLeft ? (
            <span
              className={`mr-2 items-center text-sm text-${theme}-disabled`}
            >
              {iconLeft}
            </span>
          ) : null}
        </span>
        <select
          {...props}
          className={`${variantObj} w-full flex items-center outline-none text-${theme}-text`}
        >
          {props.children}
        </select>
        <span className={`flex items-center`}>
          {iconRight ? (
            <span
              className={`ml-2 items-center text-sm text-${theme}-disabled`}
            >
              {iconRight}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default InputSelect;
