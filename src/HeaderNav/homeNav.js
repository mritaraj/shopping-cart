import React, { Component } from "react";
import Header from "../components/Header";
import HomeCardsComp from "../components/homeCardsComp";
import CorousalSlid from "../components/CorousalSlid";
// import { Outlet } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <CorousalSlid />
        <HomeCardsComp />
        {/* <Outlet /> */}
      </>
    );
  }
}

export default Home;
