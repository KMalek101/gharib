"use client";
import ChatRightBar from "@/components/chat/ChatRightBar";
import Header from "@/components/common/header/Header";
import SideBar from "@/components/common/sidebar/Sidebar";
import { NameHeaderProvider } from "@/context/NameHeaderContext";
import { KhatmasContentProvider } from "@/context/KhatmasContentContext";

const Layout = ({ children }) => {
  return (
    <KhatmasContentProvider>
      <NameHeaderProvider>
        <div className="w-screen overflow-hidden h-screen flex flex-col">
          <Header />
          <div className="flex">
            <SideBar />
            <div className="ml-72 pt-14 flex w-full">
              <div className="h-screen flex-grow">
                {children}
              </div>
              <div>
                <ChatRightBar />
              </div>
            </div>
          </div>
        </div>
      </NameHeaderProvider>
    </KhatmasContentProvider>
  );
};

export default Layout;
