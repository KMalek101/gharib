'use client'
import { useNameHeader } from "@/context/NameHeaderContext";
import ChatContent from '@/components/chat/ChatContent'
import { useParams } from "next/navigation";

const Page = () => {
    const { name } = useParams();    
    return (
      <div>
        <ChatContent nameHeader={name} />
      </div>
    );
};

export default Page;
