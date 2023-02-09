import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import React from "react";
import { NavMapData } from "./NavBar.map";
import classes from "./NavBar.module.scss";
import Button from "@/components/VButton/Button";

type Props = {};

const NavBarView = (props: Props) => {
  return (
    <SectionContainer className={classes["container"]}>
      <nav>
        <ul>
          {NavMapData.map((value: string) => (
            <li key={value + "nav"}>{value}</li>
          ))}
        </ul>
        <Button type={"button"} className={classes["button"]}>
          Login
        </Button>
      </nav>      
    </SectionContainer>
  );
};

export default NavBarView;
