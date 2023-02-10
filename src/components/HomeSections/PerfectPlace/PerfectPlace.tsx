"use client"
import React, { useState } from "react";
import PerfectPlaceView from "./PerfectPlace.view";

type Props = {};

const PerfectPlace = (props: Props) => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const next = () => {setPageIndex((prev) => prev===3?0:++prev)}
  const prev = () => {setPageIndex((prev) => prev===0?3:--prev)}

  return <PerfectPlaceView value={pageIndex} next={next} prev={prev}></PerfectPlaceView>;
};

export default PerfectPlace;
