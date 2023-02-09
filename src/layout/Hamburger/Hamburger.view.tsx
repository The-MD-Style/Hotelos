import React from 'react'
import classes from'./Hamburger.module.scss'
import VIcon from '@/components/VIcon/VIcon'
import { NavMapData } from '../NavBar/NavBar.map';

type Props = {
    isActive: boolean;
    handler: () => void;
}

const HamburgerView = (props: Props) => {
  return (
    <div className={`${classes['container']} ${props.isActive && classes['active']}`}>
        {
            props.isActive ? <div className={classes['blur']} onClick={props.handler}></div>:
            <div className={classes['iconBox']} onClick={props.handler}>
            <VIcon name={'hamburger'} className={classes['icon']}></VIcon>
        </div>
        }
       <div className={classes['container--active']}>
            <ul>{NavMapData.map((item)=> <li key={item}>{item}</li> )}</ul>
        </div>
    </div>
  )
}
export default HamburgerView;

