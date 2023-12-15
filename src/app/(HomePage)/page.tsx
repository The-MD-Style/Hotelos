"use client"
import SectionContainer from "@/containers/SectionContainer/SectionContainer";
import PerfectPlace from "@/components/HomeSections/PerfectPlace/PerfectPlace";
import MostPopular from "@/components/HomeSections/MostPopular/MostPopular";
import BestFacilities from "@/components/HomeSections/BestFacilities/BestFacilities";
import History from "@/components/HomeSections/History/History";
import Map from "@/components/HomeSections/Map/Map";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });




export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.npms.io/v2/search?q=react');
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <SectionContainer className={""}>
      <PerfectPlace></PerfectPlace>
      <MostPopular></MostPopular>
      <BestFacilities></BestFacilities>
      <History></History>
      <Map></Map>
      <div>
        {data}
      </div>
    </SectionContainer>
  );
}


