//Imports
import React, { useEffect } from "react";
import GalleryPage from './Gallery';
import Spline from '@splinetool/react-spline';

//NPM Imports
import LocomotiveScroll from "locomotive-scroll";
import AnimatedCursor from "react-animated-cursor";

//Style Imports
import "./style/App.css";
import "./style/App-mobile.css";
import { useLanguage } from "./context/LanguageProvider";
// import "./scripts/carousel-nav";
// import "./scripts/language-toggle.js";

//Script Imports
// import './scripts/carousel-nav';

//Generative Background Imports
// import * as PIXI from "pixi.js";
// import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
// import { createNoise2D } from "simplex-noise";
// const noise2D = createNoise2D();
// const value2d = noise2D(x, y);
// import hsl from "hsl-to-hex";
// import debounce from "debounce";

//Photo Imports


import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Project from "./components/Project";
import Contact from "./components/Contact";


//React Application
function App() {
  // Locomotive Scroll Constant
  const { language, toggleLanguage } = useLanguage();
  
  useEffect(() => {
    // eslint-disable-next-line
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 1,
      multiplier: 0.1,
    });
  }, []);

  // Create PixiJS app
  // const app = new PIXI.Application({
  //   // render to <canvas class="orb-canvas"></canvas>
  //   view: document.querySelector(".orb-canvas"),
  //   // auto adjust size to fit the current window
  //   resizeTo: window,
  //   // transparent background, we will be creating a gradient background later using CSS
  //   transparent: true,
  // });

  return (
    //Container for Animated Cursor
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />

<div class="blob-container">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
  <div class="blob blob3"></div>
</div>
      {/* Navigation Bar */}
      <nav>
        <b style={{ marginLeft: "1rem" }}>
        {language === 'english' ? '㋐ Joji Araki' : '㋐ 荒木 誠治'}
        </b>
        <a href="#home" style={{ marginLeft: "1rem" }}>
        {language === 'english' ? 'Home' : 'ホーム'}
        </a>
        <a href="#about">
        {language === 'english' ? 'About' : 'アバウト'}
        </a>
        <a href="#gallery">
        {language === 'english' ? 'Gallery' : 'ガラリー'}
        </a>
        <a href="#projects">
        {language === 'english' ? 'Projects' : 'プロジェクト'}
        </a>
        <a href="#contact" 
        // style={{ float: "right", marginRight: "1rem" }}
        >
          {language === 'english' ? 'Contact' : 'コンタクト'}
        </a>
        <button id="language" onClick={toggleLanguage}>
           {language === 'english' ? '日本語' : 'EN'} 
        </button>
      </nav>

      {/* Sections */}
      <div data-scroll-container>
        {/* ORB CANVAS */}
        {/* <canvas class="orb-canvas"></canvas> */}
        
        <Home />

        {/* About Section */}
        <About  />

        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/uRpHCClNUwZC2aiC/scene.splinecode"></spline-viewer>
        {/* <Spline
        scene="https://prod.spline.design/uRpHCClNUwZC2aiC/scene.splinecode" 
        /> */}

        {/* Project Section */}
        <Project />
        {/* <div>
          <GalleryPage />
        </div> */}

        {/* Gallery Section */}
       <Gallery />

      
        <p className="divider-symbol">✴</p>


        {/* Contact Section */}
        <Contact/>

        {/* Footer Section */}
        <footer>
          <p>
            &copy; 2024 Joji Araki. All rights reserved. |
            {language === 'english' ? ' Built using VSCode & Locomotive Scroll' :
             ' VSCodeとLocomotiveScroll使用'} 
          </p>
        </footer>
        {/* <script src="./scripts/carousel-nav.js"></script> */}
      </div>
    </div>
  );
}

export default App;