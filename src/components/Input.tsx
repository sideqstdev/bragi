import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { useTheme } from "../theme/theme.provider";
import { SMParagraph, XSHeader } from "./Typography";

export const inputScale = {
  default: `py-2 px-5 text-base`,
  small: `py-1 px-3 text-xxs`,
  large: `py-2 px-7 text-md`,
};

export interface inputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  scale?: keyof typeof inputScale;
  stretch?: boolean;
  variant?: "default" | "alt";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  error?: string;
}

const Input: React.FC<inputProps> = ({
  stretch = false,
  scale = "default",
  variant,
  iconRight,
  iconLeft,
  label,
  error,
  ...props
}: inputProps) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  const inputVariant = {
    default: `bg-${theme}-box-box2 focus:bg-${theme}-box-box2`,
    alt: `bg-${theme}-box-box1 focus:bg-${theme}-box-box1`,
  };

  let variantObj;
  let stretched = stretch ? `w-full` : `w-max`;

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
      <div className={`flex flex-row justify-between`}>
        {label ? (
          <XSHeader className={`text-${theme}-text w-max`}>{label}</XSHeader>
        ) : null}
        {error ? (
          <XSHeader className={`text-${theme}-danger text-right w-full`}>
            {error}
          </XSHeader>
        ) : null}
      </div>
      <div
        className={`${inputScale[scale]} ${
          error ? `ring-1 ring-dark-danger` : ``
        } ${variantObj} ${stretched} flex items-center rounded-md`}
      >
        <span className={`flex items-center`}>
          {iconLeft ? (
            <span
              className={`mr-2 items-center text-tny text-${theme}-disabled`}
            >
              {iconLeft}
            </span>
          ) : null}
        </span>
        <input
          {...props}
          className={`${variantObj} w-full flex items-center outline-none text-${theme}-text`}
        />
        <span className={`flex items-center`}>
          {iconRight ? (
            <span
              className={`ml-2 items-center text-tny text-${theme}-disabled`}
            >
              {iconRight}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default Input;
