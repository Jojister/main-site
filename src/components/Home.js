import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../images/bluemountains.jpeg";

function Home() {
  const { language, t } = useLanguage();
  return (
    <section id="home" className="home-section" data-scroll-container>
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="headingtop">
            {language === "english" ? (
              <>
                Where <em>sketches</em> turn to <em>substance</em>
              </>
            ) : (
              <>
                <em>スケッチ</em>から<em>実物</em>へとつながる空間
              </>
            )}
          </h1>

          <div className="paragraphtop">
            {language === "english" ? (
              <p>
                Hey, it's Joji Araki, a CS and Fintech student @ Northeastern.
                <br />
                Feel free to explore my creative works as well as projects.
              </p>
            ) : (
              <p>
                ようこそ僕のホームページへ。
                <br />
                ノースイースターン大学でコンプサイとフィンテック専攻、アラキジョージです。
              </p>
            )}
          </div>

          <div className="hero-actions">
            <Link to="/#projects" className="cta-btn primary">
              {t("See projects", "プロジェクトを見る")}
            </Link>
            <Link to="/shop" className="cta-btn secondary">
              {t("Shop prints", "プリントを購入")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
