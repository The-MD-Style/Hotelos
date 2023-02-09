"use client"
import React, { useState } from 'react'
import HamburgerView from './Hamburger.view'

type Props = {}

const Hamburger = (props: Props) => {
    const [isActive,setIsActive] = useState<boolean>(false);

    const buttonHandler = () => {
        setIsActive((prev) => !prev);
        if(isActive){
          document.body.style.overflow = '';
        }else{
          document.body.style.overflow = 'hidden';
        }
    }
  return (
    <HamburgerView isActive={isActive} handler={buttonHandler}></HamburgerView>
  )
}

export default Hamburger