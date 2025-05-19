import React from "react";
import './Home.css'
import PlayerBottom from "../../components/PlayerBottom";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import MusicList from "../../components/MusicList";
import Slider from "../../components/Slider";
import LeftMenuBar from "../../components/LeftMenuBar";

const Home: React.FC = () => {

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="app">
            <Header/>
            <Slider/>
            {/* <LeftMenuBar/> */}
            <MusicList/>
            {/* <PlayerBottom/> */}
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
