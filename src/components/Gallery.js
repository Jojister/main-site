//Used in Gallery Row I
import dawncamp from "../images/dawncamp.JPG";
import kyoto from "../images/kyotofestival.jpg";
import osaka from "../images/osaka.jpeg";

//Used in Gallery Row II
import hokkaido from "../images/hokkaido.jpeg";
import whatsthis from "../images/E060A810-9ED8-4DC8-B34A-2AFF93B1A0BE.jpg";
import osakaspace from "../images/osakaspace.jpeg";
import spacecraft from "../images/spacecraft.jpg";

//Used in Gallery Row III
import watercolorvenice from "../images/watercolorvenice.jpg";
import oilspaceshuttle from "../images/oilspaceshuttle.jpg";
import oilwaves from "../images/oilwaves.jpg";
import oilmonet from "../images/oilwomanwithumbrella.jpg";

//Used in Gallery Row IV
import poster1 from "../images/multimediaflyerfinal.png";
import poster2 from "../images/bobrossMMAC.png";
import poster3 from "../images/totebagredone.png";

import { useLanguage } from '../context/LanguageProvider';


const Gallery = () => {
        const { language } = useLanguage();
    return (
         <section id="gallery">
                  <h1 className="gallery-title">
                    {language === 'english' ? '✐ Gallery' : '✐ ギャラリー'}
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
                    <div className="boxlong">
                      <img src={oilmonet} alt="Art" className="cropped-image" />
                      <span class="caption">
                      {language === 'english' ? 'Woman with Parasol (Oil)' : 'モネ'}
                      </span>
                    </div>
                  
                    <div className="boxlong">
                      <img src={oilwaves} alt="Art" className="cropped-image" />
                      <span class="caption">
                      {language === 'english' ? 'Waves' : '波'}
                      </span>
                    </div>
                    
                  </div>
        
                  <div className="gallery-container">
                  <div className="boxlong">
                      <img src={oilspaceshuttle} alt="Art" className="cropped-image" />
                      <span class="caption">
                      {language === 'english' ? 'Discovery Space Shuttle' : 'ディスカバリー宇宙シャトル'}
                      </span>
                    </div>
                    <div className="boxlong">
                      <img src={watercolorvenice} alt="Art" className="cropped-image" />
                      <span class="caption">
                      {language === 'english' ? 'Watercolor Venice' : 'ヴェニス'}
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
        
    )
}

export default Gallery;