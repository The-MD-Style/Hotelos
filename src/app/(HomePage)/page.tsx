import { Inter } from "@next/font/google";
import classes from "./page.module.scss";
import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import PerfectPlace from "@/components/HomeSections/PerfectPlace/PerfectPlace";
import MostPopular from "@/components/HomeSections/MostPopular/MostPopular";
import BestFacilities from "@/components/HomeSections/BestFacilities/BestFacilities";
import History from "@/components/HomeSections/History/History";
import Map from "@/components/HomeSections/Map/Map";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <SectionContainer className={""}>
      <PerfectPlace></PerfectPlace>
      <MostPopular></MostPopular>
      <BestFacilities></BestFacilities>
      <History></History>
      <Map></Map>
    </SectionContainer>
  );
}
