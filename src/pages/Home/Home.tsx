import React from "react";
import { useState, useEffect } from "react";
import './Home.css'
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import MusicList from "../../components/MusicList";
import Slider from "../../components/Slider";
import SidebarMenu from "../../components/Sidebar/SidebarMenu";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Recent" | "Like">("Recent");
  // const activeTab = "Recent"

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.body.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="app">
            <Header/>
            <Slider/>
            <div className="flex">
              <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
              <MusicList activeTab={activeTab}/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
