import React from "react";
import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import classes from "./BestFacilities.module.scss";
import { Facilities } from "./BestFacilities.map";
import VIcon from "@/components/VIcon/VIcon";
import Button from "@/components/VButton/Button";

type Props = {};

const BestFacilitiesView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["header"]}>
          <p className={classes["headerText"]}>
            We do our best facilities provide you
          </p>
          <p className={classes["text"]}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy`}
          </p>
          <Button type={"button"} className={classes["button"]}>
            Contact Now
          </Button>
        </div>
        <div className={classes["facilities"]}>
          {Facilities.map((value) => (
            <div key={value.name} className={classes["facilitiesItem"]}>
              <VIcon
                name={value.icon}
                width={40}
                className={classes["icon"]}
              ></VIcon>
              <p className={classes["text"]}>{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default BestFacilitiesView;
