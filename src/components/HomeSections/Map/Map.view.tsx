import React from "react";

import SectionContainer from "@/containers/SectionContainer/SectionContainer";

import classes from "./Map.module.scss";
import Button from "@/components/VButton/Button";

type Props = {};

const MapView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.7999876708063!2d28.86813361584995!3d46.985263038684195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9794f8e48f42f%3A0x2cf814bcaef210a1!2sCEITI!5e0!3m2!1sru!2s!4v1675644528699!5m2!1sru!2s"
          width="600"
          height="450"
          className={classes["maps"]}
          loading="lazy"
        ></iframe>
        <div className={classes["overwrite"]}>
          <p className={classes["headerText"]}>Location of our Hotelos</p>
          <div className={classes["button-text"]}>
            <p
              className={classes["text"]}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</p>
            <Button type={"button"}>Contact</Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MapView;
