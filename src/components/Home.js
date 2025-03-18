import { useLanguage } from "../context/LanguageProvider";

function Home () {
    const { language } = useLanguage();
    return (
        <section id="home" className="home-section" data-scroll-container>
          <main>
            
            <h1 className="headingtop">
            {language === 'english' ? <blockquote>
              Where <em>sketches</em> turn to <em>substance</em>
              </blockquote> :
               <blockquote>
               <em>スケッチ</em>から<em>実物</em>へとつながる空間
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
    )
}

export default Home;