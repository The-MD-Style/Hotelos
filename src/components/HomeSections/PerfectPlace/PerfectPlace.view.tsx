import React from "react";

import SectionContainer from "@/containers/SectionContainer/SectionContainer";

import classes from "./PerfectPlace.module.scss";
import Button from "@/components/VButton/Button";
import { Info } from "./PerfectPlace.map";
import VIcon from "@/components/VIcon/VIcon";

type Props = {};

const PerfectPlaceView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["left"]}>
          <p className={classes["headerText"]}>
            Find your perfect place to stay
          </p>
          <p className={classes["text"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button>
            <div className={classes["start"]}>▶</div>
            Watch video
          </button>
        </div>
        <div className={classes["right"]}></div>
        <div className={classes["overwrite"]}>
          <div className={classes["categories"]}>
            {Info.map((value, index) => (
              <>
                <div key={value.name} className={classes["categoriesElement"]}>
                  <VIcon
                    name={value.icon}
                    width={24}
                    height={19}
                    className={classes["icon"]}
                  ></VIcon>
                  <div className={classes["text"]}>
                    <p className={classes["headText"]}>{value.name}</p>
                    <p className={classes["subText"]}>{value.subText}</p>
                  </div>
                </div>
                {index !== Info.length - 1 ? (
                  <div className={classes["separator"]}></div>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
          <Button type={"button"} className={classes["button"]}>
            <VIcon
              name={"search"}
              width={24}
              height={19}
              color={"white"}
            ></VIcon>
            Search...
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PerfectPlaceView;
