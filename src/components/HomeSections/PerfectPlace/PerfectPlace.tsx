'use client'
import React, { useState } from "react";
import PerfectPlaceView from "./PerfectPlace.view";

type Props = {};

const PerfectPlace = (props: Props) => {
  const [element, setElement] = useState<number>(0);
  const next = () => {
    setElement((prev) => prev === 3?0:++prev);
  }
  const prev = () => {
    setElement((prev) => prev === 0?3:--prev);
  }
  return <PerfectPlaceView value={element} next={next} prev={prev}></PerfectPlaceView>;
};

export default PerfectPlace;
