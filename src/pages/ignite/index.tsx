import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";

const Ignite: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Ignite Lab - Plataforma</title>
        <meta name="description" content="Plataforma das aulas" />
      </Head>
      <div className="flex-1"></div>
    </Layout>
  );
};

export default Ignite;
