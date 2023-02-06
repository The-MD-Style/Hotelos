import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import React from "react";
import { NavMapData } from "./Footer.map";
import classes from "./Footer.module.scss";
import Button from "@/components/VButton/Button";

type Props = {};

const FooterView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["leftSide"]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {NavMapData.map((value) => (
          <div key={value.category} className={classes["footerCategory"]}>
            <p className={classes["CategoryHead"]}>{value.category}</p>
            <ul className={classes["list"]}>
              {value.items.map((item) => (
                <li key={item} className={classes["item"]}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FooterView;
