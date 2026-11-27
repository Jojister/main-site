//Used in About Me
import bahamas from "../images/bahamasgpa.jpg";
import painting from "../images/about-painting.jpg";
import polaroid from "../images/polaroid4-11.JPG";
import cat from "../images/cat.JPG";
import taiko from "../images/taiko.JPG";
import windmill from "../images/windmill.JPG";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();
  return (
    <section
      id="about"
      className="bordered-section about-section"
      data-scroll-container
    >
      <h2 className="section-title">{t("About me", "アバウト")}</h2>
      <div className="content-container" data-scroll-container>
        <div className="about-left-paragraph">
          {language === "english" ? (
            <blockquote>
              Dabbling in many passions, you'll find me: painting (preferably
              oil), surfing, designing, practicing guitar, investing, and taking
              on Earth.
              <br /> <br />
              My goal is to work in finance or start a business. Come talk to me
              in Japanese or basic French!
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
        </div>

        <div className="vertical-carousel">
          <div className="carousel-track">
            <img loading="lazy" decoding="async"
              src={bahamas}
              alt={t("Younger self and Grandfather", "幼い頃の自分と祖父")}
              className="cropped-image"
            />
            <img loading="lazy" decoding="async" src={painting} alt={t("Art", "アート")} className="cropped-image" />
            <img loading="lazy" decoding="async"
              src={polaroid}
              alt={t("Polaroid Collage", "ポラロイドコラージュ")}
              className="cropped-image"
            />
            <img loading="lazy" decoding="async"
              src={cat}
              alt={t("Cat licking popsicle", "アイスを舐める猫")}
              className="cropped-image"
            />
            <img loading="lazy" decoding="async"
              src={taiko}
              alt={t("Taiko no Tatsujin", "太鼓の達人")}
              className="cropped-image"
            />
            <img loading="lazy" decoding="async"
              src={windmill}
              alt={t("Windmill with tulips", "チューリップと風車")}
              className="cropped-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;