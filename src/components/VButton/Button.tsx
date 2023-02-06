import React from "react";
import ButtonView from "./Button.view";

type Props = {
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  return <ButtonView {...props}>{props.children}</ButtonView>;
};

export default Button;
