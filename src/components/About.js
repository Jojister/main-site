//Used in About Me
import bahamas from "../images/bahamasgpa.jpg";
import painting from "../images/IMG_9712 copy.jpg";
import polaroid from "../images/polaroid4-11.JPG";
import cat from "../images/cat.JPG";
import taiko from "../images/taiko.JPG";
import windmill from "../images/windmill.JPG";
import { useLanguage } from "../context/LanguageProvider";


const About = () => {
    const { language } = useLanguage();
     return (
<section
          id="about"
          className="bordered-section about-section"
          data-scroll-container
        >
          <div className="aboutmewordcontain">
            <span className="aboutmeword">
              {language === 'english' ? 'About Me ✧' : 'アバウト ✧'}
              </span>
          </div>
          <div className="content-container" data-scroll-container>
            <p className="about-left-paragraph">
            
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
                多様な趣味を持っており、絵画（油絵）、サーフ、ギター、投資や世界を旅してます。
                <br /> <br />
                キャリア方向は金融かベンチャー企業に勤める予定です。英語と基本のフランス語を喋れます。
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

            <div className="vertical-carousel">
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
        {/* <div className="skill-box">
          <p className="skill-title">⤪ SKILLS ⤭
          <br/> --------------------------
          </p> 
          
          <p className="skill-box-line">
          <span className="borderstyle">Java</span>
          <span className="borderstyle">Kotlin</span> 
          <span className="borderstyle">Python</span>
          <span className="borderstyle">JavaScript</span>
          <span className="borderstyle">Swift</span> 
          <span className="borderstyle">Ruby</span>
          </p>
          <p className="skill-box-line">
          <span className="borderstyle">HTML&CSS</span>
          <span className="borderstyle">SQL</span>
          <span className="borderstyle">MongoDB</span>
          <span className="borderstyle">Redis</span>
          </p>
          <p className="skill-box-line">
          <span className="borderstyle">Adobe Suite</span>
          <span className="borderstyle">Microsoft Office</span>
          <span className="borderstyle">Google Suite</span>
          </p>
          <p className="skill-box-line">
          <span className="borderstyle">Web Dev</span>
          <span className="borderstyle">Database Design</span>
          </p>
          <p className="skill-box-line">
          <span className="borderstyle">Object Oriented Programming</span>
          </p>
        </div> */}
        
        </section>
    );
}

export default About;