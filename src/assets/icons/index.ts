import {  location,calendar,user,search, twitter, facebook, instagram, play, hamburger, arrow  } from './custom';

const icons = {
  location,
  calendar,
  user,
  search,
  twitter,
  facebook,
  instagram,
  play,
  hamburger,
  arrow
};

export type Icons = keyof typeof icons;

export default icons;
