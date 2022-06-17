import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableInvoices from "../components/Tables/TableInvoices";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Sidebar />
      <TableInvoices />
    </div>
  );
};

export default Home;
