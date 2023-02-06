import {  location,calendar,user,search  } from './custom';

const icons = {
  location,
  calendar,
  user,
  search,
};

export type Icons = keyof typeof icons;

export default icons;
