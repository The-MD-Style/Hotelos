import VCartView from "@/components/VCart/VCart.view";
import React from "react";
import { cartData } from "./MostPopular.map";
import classes from "./MostPopular.module.scss";
import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import Button from "@/components/VButton/Button";

type Props = {};

const MostPopularView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["header"]}>
          <p className={classes["headerText"]}>Our most popular Hotels</p>
          <div className={classes["button-text"]}>
            <p className={classes["text"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button type={"button"} className={classes["button"]}>
              View all
            </Button>
          </div>
        </div>
        <div className={classes["carts"]}>
          {cartData.map((value) => (
            <VCartView
              key={value.name}
              model={value.model}
              name={value.name}
              price={value.price}
              photo={value.photo}
            ></VCartView>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default MostPopularView;
