import React from "react";
import classes from "./VCart.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  model: string;
  name: string;
  price: number;
  photo: StaticImageData;
};

const VCartView = (props: Props) => {
  return (
    <div className={classes["cart"]}>
      <Image src={props.photo} alt={""} width={411} height={320}></Image>
      <div className={classes["description"]}>
        <p className={classes["model"]}>{props.model}</p>
        <p className={classes["name"]}>{props.name}</p>
        <p className={classes["price"]}>${props.price} Par Night</p>
      </div>
    </div>
  );
};

export default VCartView;
