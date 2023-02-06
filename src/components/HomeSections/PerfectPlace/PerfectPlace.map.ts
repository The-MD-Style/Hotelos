import { Icons } from "@/assets/icons";

type InfoType = {
    name:string;
    subText:string;
    icon:Icons;
}

export const Info:InfoType[] = [
    {
        name:'Location',
        subText:'United States',
        icon:'location'
    },
    {
        name:'Chack in',
        subText:'10 Jun 2021',
        icon:'calendar'
    },
    {
        name:'Chack out',
        subText:'15 Jun 2021',
        icon:'calendar'
    },
    {
        name:'Rooms for',
        subText:'1 room,2guests',
        icon:'user'
    },
]