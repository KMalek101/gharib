"use client";

import { useState } from "react";
import ChatBrotherSection from "./brothers/ChatBrothersSection";
import ChatGroupsSection from "./groups/ChatGroupsSection";
import ChatKhatmasSection from "./khatmas/ChatKhatmasSection";
import { KhatmasContentProvider } from "@/context/KhatmasContentContext"; // Import the provider

export default function ChatRightBar({ changeNameHeader }) {
  const [activeTab, setActiveTab] = useState('brothers'); 

  const setActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div 
      style={{ width: "480px" }} 
      className="border-l border-[var(--g-color)] bg-[var(--main-color)] h-[var(--height)]"
    >
      {/* Tab Navigation */}
      <div className="flex p-7 gap-8 justify-between">
        <div 
          onClick={() => setActive('brothers')} 
          className={`cursor-pointer font-bold text-l ${activeTab === 'brothers' ? 'text-blue-500' : 'text-white'}`}
        >
          Brothers
        </div>
        <div 
          onClick={() => setActive('groups')} 
          className={`cursor-pointer font-bold text-l ${activeTab === 'groups' ? 'text-blue-500' : 'text-white'}`}
        >
          Groups
        </div>
        <div 
          onClick={() => setActive('khatmas')} 
          className={`cursor-pointer font-bold text-l ${activeTab === 'khatmas' ? 'text-blue-500' : 'text-white'}`}
        >
          Khatmas
        </div>
      </div>

      <div>
        {activeTab === 'brothers' && <ChatBrotherSection changeNameHeader={changeNameHeader} />}
        {activeTab === 'groups' && <ChatGroupsSection changeNameHeader={changeNameHeader} />}
        {activeTab === 'khatmas' && (
          <KhatmasContentProvider>
            <ChatKhatmasSection />
          </KhatmasContentProvider>
        )}
      </div>
    </div>
  );
}
