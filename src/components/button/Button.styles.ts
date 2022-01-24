import { css } from "@linaria/core";
import { ButtonProps } from "./Button.types";

export const buttonStyles = (props: ButtonProps) => {
  return css`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;

    display: inline-block;
    padding: ${props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
    color: ${props.type === "primary" ? "#1b116e" : "#ffffff"};
    background-color: ${props.type === "primary" ? "#6bedb5" : "#1b116e"};
    opacity: ${props.disabled ? 0.5 : 1};
    &:hover {
      background-color: ${props.type === "primary" ? "#55bd90" : "#6bedb5"};
    }
    &:active {
      border: solid 2px #1b116e;
      padding: ${props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
    }
  `;
};
