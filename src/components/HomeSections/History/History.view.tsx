import React from "react";
import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import classes from "./History.module.scss";
import Button from "@/components/VButton/Button";

type Props = {};

const HistoryView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["left"]}></div>
        <div className={classes["right"]}>
          <p className={classes["header"]}>Discover our History</p>
          <p className={classes["text"]}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}
            <br />
            <br />
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
          </p>
          <Button type={"button"} className={classes["button"]}>
            Explore More
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HistoryView;
