import React, { PropsWithChildren, memo } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {children}
        <Sidebar />
      </main>
    </div>
  );
};

export default memo(Layout);
