import React from "react";
import './Home.css'
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import MusicList from "../../components/MusicList";
import Slider from "../../components/Slider";
import SidebarMenu from "../../components/Sidebar/SidebarMenu";

const Home: React.FC = () => {

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="app">
            <Header/>
            <Slider/>
            <SidebarMenu/>
            <MusicList/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
