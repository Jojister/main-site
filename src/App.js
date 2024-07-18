//Imports
import React, { useEffect, useState } from "react";

//NPM Imports
import LocomotiveScroll from "locomotive-scroll";
import AnimatedCursor from "react-animated-cursor";

//Style Imports
import "./style/App.css";
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
//Used in About Me
import bahamas from "./images/bahamasgpa.jpg";
import painting from "./images/IMG_9712 copy.jpg";
import polaroid from "./images/polaroid4-11.JPG";
import cat from "./images/cat.JPG";
import taiko from "./images/taiko.JPG";
import windmill from "./images/windmill.JPG";

//Used in Gallery Row I
import dawncamp from "./images/dawncamp.JPG";
import kyoto from "./images/kyotofestival.jpg";
import osaka from "./images/osaka.jpeg";

//Used in Gallery Row II
import hokkaido from "./images/hokkaido.jpeg";
import whatsthis from "./images/E060A810-9ED8-4DC8-B34A-2AFF93B1A0BE.jpg";
import osakaspace from "./images/osakaspace.jpeg";
import spacecraft from "./images/spacecraft.jpg";

//Used in Gallery Row III
import poster1 from "./images/multimediaflyerfinal.png";
import poster2 from "./images/bobrossMMAC.png";
import poster3 from "./images/totebagredone.png";

//Used in Project & Git
import astrowavelogo from "./images/astrowavebeige.jpg";
// import astrowavepost from "./images/astrowave.PNG";
import githubwhite from "./images/githubw.png";
import fishtotebag from "./images/fishtote.JPG";


//React Application
function App() {
  // Locomotive Scroll Constant
  
  useEffect(() => {
    // eslint-disable-next-line
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 1,
      multiplier: 0.1,
    });
  }, []);

  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'japanese' : 'english');
  };


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

        {/* Home Section */}
        <section id="home" className="home-section" data-scroll-container>
          <main>
            <h1 className="headingtop">
            {language === 'english' ? <blockquote>
              Where <em>sketches</em> turn to <em>substance</em>
              </blockquote> :
               <blockquote>
               <em>スケッチ</em>から<em>実物</em>へとなる空間
             </blockquote>}

              {/* Where <em>sketches</em> turn to <em>substance</em> */}
            </h1>
            <p className="paragraphtop">
            {language === 'english' ? 
            <blockquote>
              Hey, it's Joji Araki, a CS and Fintech student @ Northeastern.
              <br />
              Feel free to explore my creative works as well as projects.
            </blockquote> :
            <blockquote>
              ようこそ僕のホームページへ。<br></br>ノースイースターン大学でコンプサイとフィンテック専攻、アラキジョージです。
            </blockquote>}

              {/* Hey, it's Joji Araki, a CS and Fintech student @ Northeastern.
              <br />
              Feel free to explore my creative works as well as projects. */}
            </p>
          </main>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bordered-section about-section"
          data-scroll-container
        >
          <div className="content-container" data-scroll-container>
            <p className="about-left-paragraph">
              <span className="aboutmeword">
              {language === 'english' ? 'About Me ✧' : 'アバウト ✧'}
              </span>
              <br /> <br />
              {language === 'english' ? <blockquote>
              Dabbling in many passions, you'll find me: painting
               (preferably oil), surfing, designing, practicing guitar,
                investing, and taking on Earth.
              <br /> <br />
              My goal is to either work in the financial sector and or startup a
              business. Come talk to me in Japanese or basic French!
              <br /> <br />
              #traveling <br /> #Sucker4Adobe <br /> #Fujifilm
              </blockquote> :
               <blockquote>
                色んな趣味を持っており、絵画（油絵）、サーフ、ギター、投資や世界を旅してます。
                <br /> <br />
                カリア方向は金融かベンチャー企業に勤める予定です。英語と基本のフランス語を喋れます。
                #旅行 <br /> #アドビ愛好者 <br /> #フジフイルム
                </blockquote>}
              {/* Dabbling in many passions, I bounce around from Boston, Dallas,
              and Tokyo. You'll find me: painting (perferably oil), surfing,
              designing, practicing guitar, investing, and taking on Earth.
              <br /> <br />
              My goal is to either work in the financial sector and or startup a
              business. Come talk to me in Japanese or basic French!
              <br /> <br />
              #traveling <br /> #Sucker4Adobe <br /> #Fujifilm */}
            </p>

            <div className="carousel-container">
              <div className="carousel-track">
                <img
                  src={bahamas}
                  alt="Younger self and Grandfather"
                  className="cropped-image"
                />
                <img src={painting} alt="Art" className="cropped-image" />
                <img
                  src={polaroid}
                  alt="Polaroid Collage"
                  className="cropped-image"
                />
                <img
                  src={cat}
                  alt="Cat licking popsicle"
                  className="cropped-image"
                />
                <img
                  src={taiko}
                  alt="Taiko no Tatsujin"
                  className="cropped-image"
                />
                <img
                  src={windmill}
                  alt="Windmill with tulips"
                  className="cropped-image"
                />
              </div>
            </div>
          </div>
        <div className="skill-box">
          <p className="skill-title">⤪ SKILLS ⤭
          <br/> --------------------------
          </p> 
          
          <p>
          <span className="borderstyle">Java</span>
          <span className="borderstyle">Kotlin</span> 
          <span className="borderstyle">Python</span>
          <span className="borderstyle">JavaScript</span>
          <span className="borderstyle">Swift</span> 
          <span className="borderstyle">Ruby</span>
          <span className="borderstyle">HTML&CSS</span>
          </p>
          <p>
          <span className="borderstyle">SQL</span>
          <span className="borderstyle">MongoDB</span>
          <span className="borderstyle">Redis</span>
          </p>
          <p>
          <span className="borderstyle">Adobe Suite</span>
          <span className="borderstyle">Microsoft Office</span>
          <span className="borderstyle">Google Suite</span>
          </p>
          <p>
          <span className="borderstyle">Web Dev</span>
          <span className="borderstyle">Database Design</span>
          <span className="borderstyle">Object Oriented Programming</span>
          </p>
        </div>
        
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <h1 style={{ marginLeft: "2rem" }}>
            {language === 'english' ? '✐ Gallery' : '✐ ガラリー'}
          </h1>
          <div className="gallery-container">
            <div className="box">
              <img
                src={dawncamp}
                alt="Yosmite Camp Night"
                className="cropped-image"
              />
              <span class="caption">
              {language === 'english' ? 'Yosemite at Night' : '夜のヨセミテ'}
              </span>

            </div>
            <div className="box">
              <img src={kyoto} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Kyoto Festival' : '祇園祭'}
              </span>
            </div>
            <div className="boxlong">
              <img src={osaka} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Osaka' : '大阪'}
              </span>
            </div>
          </div>

          <div className="gallery-container">
            <div className="box">
              <img src={hokkaido} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Lake Shikotsu, Hokkaido' : '支笏湖、北海道'}
              </span>
            </div>
            
            <div className="box">
              <img src={whatsthis} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Tuolumne River' : 'トゥオルミ川'}
              </span>
            </div>
            <div className="box">
              <img src={osakaspace} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Metropolis' : 'メトロポリス'}
              </span>
            </div>
            <div className="box">
              <img src={spacecraft} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Discovery Space Shuttle' : 'ディスカバリー宇宙シャトル'}
              </span>
            </div>
          </div>

          <div className="gallery-container">
            <div className="box">
              <p className="gallery-para">
                <span className="emoji">📸</span>  <br />
                <b>
                {language === 'english' ? 'Photography & Posters' : '写真＆ポスター'}
              
                </b> 
                <br />
                {language === 'english' ?
                 'Created with Adobe Illustrator, Lightroom, Photoshop.  Shot using Sony A100 with various lens & iPhone.' :
                  'アドビイラスト、ライトルーム、フォトショップで作成。Sony A100、さまざまなレンズ、iPhoneを使用し撮影。'}
              </p>
            </div>
            <div className="box">
              <img src={poster1} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Club Sign Up' : 'クラブ参加'}
              </span>
            </div>
            <div className="box">
              <img src={poster2} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Bob Ross Painting' : 'ボブロスイベント'}
              </span>
            </div>
            <div className="box">
              <img src={poster3} alt="Art" className="cropped-image" />
              <span class="caption">
              {language === 'english' ? 'Tote Bag Painting' : 'トートバッグイベント'}
              </span>
            </div>
          </div>
          
        </section>






        {/* Project Section */}
        <section id="projects" className="project" 
        // data-scroll-container
        //  data-scroll-direction="horizontal"
         >
          
            <div className="project-box"
            //  data-scroll-target="#Projects"
             >
              <p className="project-title">
              {language === 'english' ? '✦ Projects & More' : '✦ プロジェクト'}
              </p>
            </div>
            <div className="project-style">
            <div className="astrowave"> 
              <div className="boxproject">
                <p className="projectname"> 
                {language === 'english' ? 'Astrowave' : 'アストラウェーブ'}
                 </p> 
                <img src={astrowavelogo} alt="Astrowave" className="cropped-image astrowave" />
                
                <p className="projecttext">
                {language === 'english' ? <blockquote> CEO and Founder
                   <br/> Renewable jewelry company.
                   Our mission is to take broken down surfboards and recycle 
                   them into unique accessories!
                   <br/>
                   Recieved investment from STIHL that was repaid. Utilized
                   D-Limonene, a solvent to metamorphisize the surfboards
                   into charms. Handwoven bracelet with quality packaging.</blockquote> :
                    <blockquote> 
                    ファウンダーとCEO
                    <br/>壊れたサーフボードをリサイクルし、アクセサリーに変えるビジネス。地球温暖化を考えて、
                    作りました。
                    <br/>
                    スティールからの投資を頂き、払い解しました。D-Limoneneと言う物質を利用し、
                    ボードをチャームえと変身します。ブレースレットは手で編んであり、シンプルな
                    パッケージングで保管してます。

                      </blockquote>}
                    
                </p>
                <a href="https://docs.google.com/presentation/d/1xCezcRiJelyxnovzaO_5F_CNAwmGXOmL6ayBbI7RzFM/edit?usp=sharing">Pitch to STIHL ↗</a>

                <div>
                  
                </div>
              </div>
              <div className="boxproject">
                <p className="projectname"> 
                {language === 'english' ? 'Multimedia Art Club' : '芸術クラブ'}
                </p> 
                <img src={fishtotebag} alt="Fish totebag" className="cropped-image astrowave" />
                
                <p className="projecttext"> MAC Co-President & Founder
                   <br/> Club where members have the opportunity to play with 
                   different mediums & interact with others who have artistic interests.
                   <br/>
                   Planned events such as Totebag paintings, Bob Ross Tutorials, Charcoal, 
                   Spray paint. Managed budget of 1200 for the year. Average attendance 20-30
                   per 1H event. Created posters with own creative liberty. 
                </p>

                <div>
                  
                </div>
              </div>
              <div className="boxproject">
                <p className="projectname"> Github </p> 
                <a href="https://github.com/Jojister">
                  <img src={githubwhite} alt="Github Logo" className="cropped-image astrowave" />
                </a>
                
                <p className="projecttext"> Repositories
                   <br/> Some things I have been working on...
                   <br/>
                   More projects coming along the way :0 
                   <br/> <br/>
                   --Click or tap on Cat--
                </p>

                <div>
                  
                </div>
              </div>
              
              <div className="boxproject">
                <p className="projectname"> Site </p> 
                <p className="logo">㋐</p>
                {/* <img src={astrowavelogo} alt="Astrowave" className="cropped-image astrowave" /> */}
                {/* <span class="caption"> */}
                {/* {language === 'english' ? 'Astrowave Logo' : 'ボブロスイベント'} */}
                {/* </span> */}
                <p className="projecttext">
                   This website!
                   Made using HTML, CSS and JavaScript, it was fun getting it all together.
                   Imports used are: Locomotive Scroll, Animated Cursor, and PIXI.
                   <br/>
                   Coded through VSCode in tandem with React.  
                   <br/>
                   Right click & Inspect Element to see the inner workings!
                </p>

                <div>
                  
                </div>
              </div>
            </div>
            
            {/* What i have been working on */}
            {/* Showcase astrowave */}
            {/* This website!! */}
          </div>
          <p className="scrolltext">
              SCROLL →
            </p>
        </section>

        <p className="divider-symbol">✴</p>


        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <br />
          <h2 className="contact-style">
          {language === 'english' ? 'CONTACT ME' : 'コンタクト'}
          </h2>
          <div className="centered-word">
            <a
              href="mailto:jojister5@gmail.com"
              target="email"
              className="centered-word"
            >
               {language === 'english' ? 'Email' : 'メール'}
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/joji-araki/"
              target="linkedin"
              className="centered-word"
            >
               {language === 'english' ? 'LinkedIn' : 'リンクトイン'}
            </a>
            <br />
            <a
              href="https://www.instagram.com/jojister_/"
              target="instagram"
              className="centered-word"
            >
              {language === 'english' ? 'Instagram' : 'インスタ'}
            </a>
            <br />
            <a
              href="https://www.instagram.com/jarakinn/"
              target="artinstagram"
              className="centered-word"
            >
              {language === 'english' ? 'Art' : '作品'}
            </a>
          </div>
        </section>

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
