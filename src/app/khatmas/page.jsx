"use client";
import { useKhatmasContent } from "@/context/KhatmasContentContext";
import KhatmasContent from "@/components/khatmas/KhatmasContent";
import { useEffect } from "react";

const Page = () => {

  const context = useKhatmasContent();
  useEffect(()=>{
    
    console.log("Current Khatmas Content:", context);
  }, [context])


  return (
    <div>
      <KhatmasContent 
        nameHeader={context.name} 
        percentage={context.percentage} 
        timeLeft={context.timeLeft} 
        status={context.status} 
        personalProgress={context.personalProgress} 
      />
    </div>
  );
}

export default Page;
