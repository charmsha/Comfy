import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
     
    <Header/>
    <Navbar/>
    <section className="align-element py-20">
      <Outlet />
    </section>

      {/* // outlet act  as a placeholder for child routes*/}
    </>
  );
};

export default HomeLayout;
