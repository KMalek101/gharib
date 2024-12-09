'use client'
import { useNameHeader } from "@/context/NameHeaderContext";
import KhatmasContent from "@/components/khatmas/KhatmasContent";

const Page = () => {
  const { nameHeader } = useNameHeader();
    
  return (
    <div>
      <KhatmasContent nameHeader={nameHeader} />
    </div>
  );
};

export default Page;
