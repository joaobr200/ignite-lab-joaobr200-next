import { GetServerSideProps } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Ignite: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <Head>
        <title>Ignite Lab - Plataforma</title>
        <meta name="description" content="Plataforma das aulas" />
      </Head>
      <Header />
      <main className="flex">
        <div className="flex-1"></div>
        <Sidebar />
      </main>
    </div>
  );
};

export default Ignite;
