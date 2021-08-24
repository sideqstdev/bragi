import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { inputScale } from "./Input";

export interface numberInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  scale?: keyof typeof inputScale;
  stretch?: boolean;
  variant?: `default` | `alt`;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  error?: string;
}
