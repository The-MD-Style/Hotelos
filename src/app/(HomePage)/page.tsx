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

  const [data, setData] = useState<string[]>([]);
  const [data2, setData2] = useState<string[]>(['']);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.npoint.io/a41135bbc5d774b98a47');
      const newData = await response.json();
      setData(newData.what);
      setData2(newData.why);
      
    };
    
    fetchData();
  },[]);
  


  return (
    <SectionContainer className={""}>
      <PerfectPlace></PerfectPlace>
      <MostPopular></MostPopular>
      <BestFacilities></BestFacilities>
      <History></History>
      <Map></Map>
      <div>
        {data}
        <br />
        <ul>
          {data2.map((item)=> <li key={item+"hui"}>{item}</li> )}
        </ul>
      </div>
    </SectionContainer>
  );
}


