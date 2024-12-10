"use client";
import { useKhatmasContent } from "@/context/KhatmasContentContext";
import KhatmasContent from "@/components/khatmas/KhatmasContent";

const Page = () => {
  const { name, percentage, timeLeft, status, personalProgress } = useKhatmasContent();
    
  return (
    <div>
      <KhatmasContent 
        nameHeader={name} 
        percentage={percentage} 
        timeLeft={timeLeft} 
        status={status} 
        personalProgress={personalProgress} 
      />
    </div>
  );
};

export default Page;
