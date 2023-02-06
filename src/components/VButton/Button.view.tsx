import React from "react";
import classes from "./Button.module.scss";

type Props = {
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonView: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes["button"]} ${props.className ?? ""}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonView;
