import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  type?: "primary" | "secondary" | "basic";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
