import React from "react";
import MostPopularView from "./VCart.view";
import VCartView from "./VCart.view";
import { StaticImageData } from "next/image";

type Props = {
  photo: StaticImageData;
  model: string;
  name: string;
  price: number;
};

const VCart = (props: Props) => {
  return <VCartView {...props}></VCartView>;
};

export default VCart;
