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
          {language === "english" ? "About Me ✧" : "アバウト ✧"}
        </span>
      </div>
      <div className="content-container" data-scroll-container>
        <p className="about-left-paragraph">
          <br /> <br />
          {language === "english" ? (
            <blockquote>
              Dabbling in many passions, you'll find me: painting (preferably
              oil), surfing, designing, practicing guitar, investing, and taking
              on Earth.
              <br /> <br />
              My goal is to either work in the financial sector and or startup a
              business. Come talk to me in Japanese or basic French!
              <br /> <br />
              #traveling <br /> #Sucker4Adobe <br /> #Fujifilm
            </blockquote>
          ) : (
            <blockquote>
              多様な趣味を持っており、絵画（油絵）、サーフ、ギター、投資や世界を旅しています。
              <br /> <br />
              キャリア方向は金融かベンチャー企業に勤める予定です。英語と基本のフランス語を喋れます。
              <br /> <br />
              #旅行 <br /> #アドビ愛好者 <br /> #フジフイルム
            </blockquote>
          )}
        </p>

        <div className="vertical-carousel">
          <div className="carousel-track">
            <img
              src={bahamas}
              alt={language === "english" ? "Younger self and Grandfather" : "幼い頃の自分と祖父"}
              className="cropped-image"
            />
            <img src={painting} alt={language === "english" ? "Art" : "アート"} className="cropped-image" />
            <img
              src={polaroid}
              alt={language === "english" ? "Polaroid Collage" : "ポラロイドコラージュ"}
              className="cropped-image"
            />
            <img
              src={cat}
              alt={language === "english" ? "Cat licking popsicle" : "アイスを舐める猫"}
              className="cropped-image"
            />
            <img
              src={taiko}
              alt={language === "english" ? "Taiko no Tatsujin" : "太鼓の達人"}
              className="cropped-image"
            />
            <img
              src={windmill}
              alt={language === "english" ? "Windmill with tulips" : "チューリップと風車"}
              className="cropped-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;