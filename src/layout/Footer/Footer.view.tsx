import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import React from "react";
import { NavMapData } from "./Footer.map";
import classes from "./Footer.module.scss";
import Button from "@/components/VButton/Button";
import { Icons } from "@/assets/icons";
import VIcon from "@/components/VIcon/VIcon";

type Props = {};

const FooterView = (props: Props) => {
  const social:Icons[] = ['instagram','facebook','twitter'];
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["leftSide"]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={classes['icons']}>
              {social.map((item) => <VIcon key={item} name={item} height={35} className={`${classes[item]}`}></VIcon>) }
          </div>
        </div>
        <div className={classes['tablesWrapper']}>
        {NavMapData.map((value) => (
          <div key={value.category} className={classes["footerCategory"]}>
            <p className={classes["CategoryHead"]}>{value.category}</p>
            <ul className={classes["list"]}>
              {value.items.map((item) => (
                <li key={item} className={`${classes["item"]}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FooterView;
