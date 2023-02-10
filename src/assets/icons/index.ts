import {  location,calendar,user,search, twitter, facebook, instagram, play, hamburger  } from './custom';

const icons = {
  location,
  calendar,
  user,
  search,
  twitter,
  facebook,
  instagram,
  play,
  hamburger
};

export type Icons = keyof typeof icons;

export default icons;
