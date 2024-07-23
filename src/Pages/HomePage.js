import React from "react";
// import Banner  from "../components/Banner/Banner";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
    <Header />
      <Banner />
      <CoinsTable />
    </>
  );
};

export default HomePage;
