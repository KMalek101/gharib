'use client'
import { useNameHeader } from "@/context/NameHeaderContext";
import ChatContent from '@/components/chat/ChatContent'

const Page = () => {
  const { nameHeader } = useNameHeader();

  console.log("THE NAME ")
  return (
    <div>
      <ChatContent nameHeader={nameHeader} />
    </div>
  );
};

export default Page;
