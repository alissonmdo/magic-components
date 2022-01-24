import { css } from "@linaria/core";
import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

function Button(props: ButtonProps) {
  return <button className={buttonStyles(props)}></button>;
}

export default Button;
