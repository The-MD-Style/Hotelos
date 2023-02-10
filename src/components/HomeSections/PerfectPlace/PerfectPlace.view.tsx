import React from "react";

import SectionContainer from "@/containers/SectionContainer/SectionContainer";

import classes from "./PerfectPlace.module.scss";
import Button from "@/components/VButton/Button";
import { Info } from "./PerfectPlace.map";
import VIcon from "@/components/VIcon/VIcon";
import Image from "next/image";
import photo from "@/assets/images/homeImage2.jpg"
import useSwipe from "@/hooks/useSwipe/useSwipe";

type Props = {
  value:number;
  next:()=>void;
  prev:()=>void;
};

const PerfectPlaceView = (props: Props) => {
  const mobile = Info[props.value];
  const swipeHandle = useSwipe({ onSwipedLeft: props.next, onSwipedRight: props.prev });
  
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
            <div className={classes["start"]}><VIcon name={"play"} className={classes['icon']}></VIcon></div>
            Watch video
          </button>
        </div>
        <div className={classes["right"]}>
          <Image src={photo} alt={""} className={classes['image']}></Image>
        </div>
        <div className={classes['overwriteWrapper']}>
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
                  <div key={value + 'separator'} className={classes["separator"]}></div>
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
            {/* Search... */}
            <input type="text" placeholder="Search..." className={classes['input']}></input>
          </Button>
          </div>
          <div {...swipeHandle} className={classes['overwriteMobile']}>
                  <button className={`${classes['navButton']} ${classes['prev']}`} onClick={props.prev}><VIcon name={"next"} className={classes['icon']}></VIcon></button>
                  <div className={classes["categories"]}>
                  {
                    <div key={mobile.name} className={classes["categoriesElement"]}>
                    <VIcon
                      name={mobile.icon}
                      width={24}
                      height={30}
                      className={classes["icon"]}
                    ></VIcon>
                    <div className={classes["text"]}>
                      <p className={classes["headText"]}>{mobile.name}</p>
                      <p className={classes["subText"]}>{mobile.subText}</p>
                    </div>
                    </div>
                  }
                  </div>
                  <button className={`${classes['navButton']} ${classes['next']}`} onClick={props.next}><VIcon name={"next"} className={classes['icon']}></VIcon></button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PerfectPlaceView;
