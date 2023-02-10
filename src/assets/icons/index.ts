import {  location,calendar,user,search, twitter, facebook, instagram, play, hamburger, next  } from './custom';

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
  next
};

export type Icons = keyof typeof icons;

export default icons;
