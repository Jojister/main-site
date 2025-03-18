import astrowavelogo from "../images/astrowavebeige.jpg";
import githubwhite from "../images/githubw.png";
import fishtotebag from "../images/fishtote.JPG";
import defaux from "../images/defaux.png";
import summit from "../images/summit-app-icon.png";
import summitexample from "../images/summitexample.jpeg";
import astrowaveexample from "../images/astrowaveexample.jpg";
import defauxexample from "../images/defauxexample.jpeg";
import multimediaartex from "../images/multimediaartex.jpg";
import { useLanguage } from "../context/LanguageProvider";

const Project = () => {
  const { language } = useLanguage();
  return (
    <section id="projects" className="project">
      <div className="project-box">
        <p className="project-title">
          {language === "english" ? "PROJECTS" : "✦ プロジェクト"}
        </p>
      </div>
      <div className="project-style">
        <div className="container">
          <div className="deck">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname">
                  {language === "english" ? "Defaux" : "アストラウェーブ"}
                </p>
                <img
                  src={defaux}
                  alt="Astrowave"
                  className="cropped-image astrowave"
                />
                <p className="projecttext">
                  Hack(H)er413
                  <br /> DeFaux offers a decentralized solution to combat
                  misinformation. By leveraging blockchain technology, we're
                  creating a transparent record of verified images.
                  <br />
                  📸 Image Verification, 🔗 Blockchain Integration, 🔍 Public
                  Access, 💬 Login Page.
                </p>
                <div className="bottext"></div>
              </div>
              <div className="back face">
                <h2>Skills</h2>
                <ul>
                  <li>Solidity</li>
                  <li>Full Stack Development</li>
                  <li>MongoDB</li>
                  <li>Hashing</li>
                </ul>
                <img
                  src={defauxexample}
                  alt="Summit Logo"
                  className="imageback"
                />
              </div>
            </div>
          </div>
          <div className="deck">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname">
                  {language === "english" ? "Summit" : "アストラウェーブ"}
                </p>
                <img
                  src={summit}
                  alt="Summit Logo"
                  className="cropped-image astrowave"
                />
                <p className="projecttext">
                  Developed a mobile app demo designed to empower students in
                  managing their financial debt. With university tuition
                  skyrocketing and student debt growing exponentially, Summit
                  aims to improve financial literacy among students. Key
                  Features: Debt visualization using hiking/trail analogies
                  AI-powered chatbot for financial guidance Personalized
                  financial plan for debt repayment
                </p>
              </div>
              <div className="back face">
                <h2>Skills</h2>
                <ul>
                  <li>Full Stack Development</li>
                  <li>Axios Calls</li>
                  <li>Node.js</li>
                  <li>Expo</li>
                </ul>
                <img
                  src={summitexample}
                  alt="Summit Logo"
                  className="imageback"
                />
              </div>
            </div>
          </div>
          <div className="deck">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname">
                  {language === "english" ? "Astrowave" : "アストラウェーブ"}
                </p>
                <img
                  src={astrowavelogo}
                  alt="Astrowave"
                  className="cropped-image astrowave"
                />
                <p className="projecttext">
                  CEO and Founder
                  <br /> Renewable jewelry company. Our mission is to take
                  broken down surfboards and recycle them into unique
                  accessories!
                  <br />
                  Recieved investment from STIHL that was repaid. Utilized
                  D-Limonene, a solvent to metamorphisize the surfboards into
                  charms. Handwoven bracelet with quality packaging.
                </p>
                <a href="https://docs.google.com/presentation/d/1xCezcRiJelyxnovzaO_5F_CNAwmGXOmL6ayBbI7RzFM/edit?usp=sharing">
                  Pitch to STIHL ↗
                </a>
                <div className="bottext"></div>
              </div>
              <div className="back face">
                <h2>Skills</h2>
                <ul>
                  <li>Product Management</li>
                  <li>Pitching</li>
                  <li>Organic Chemistry</li>
                  <li>Excel</li>
                </ul>
                <img
                  src={astrowaveexample}
                  alt="Summit Logo"
                  className="imageback astrow"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="deck">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname">
                  {language === "english"
                    ? "Multimedia Art Club"
                    : "芸術クラブ"}
                </p>
                <img
                  src={fishtotebag}
                  alt="Fish totebag"
                  className="cropped-image astrowave"
                />
                <p className="projecttext">
                  MAC Co-President & Founder
                  <br /> Club where members have the opportunity to play with
                  different mediums & interact with others who have artistic
                  interests.
                  <br />
                  Planned events such as Totebag paintings, Bob Ross Tutorials,
                  Charcoal, Spray paint. Managed budget of 1200 for the year.
                  Average attendance 20-30 per 1H event. Created posters with
                  own creative liberty.
                </p>
                <div className="bottext"></div>
              </div>
              <div className="back face">
                <h2>Skills</h2>
                <ul>
                  <li>Oil Painting</li>
                  <li>Event Planning</li>
                  <li>Financial management</li>
                  <li>Acrylic</li>
                </ul>
                <img
                  src={multimediaartex}
                  alt="Summit Logo"
                  className="imageback"
                />
              </div>
            </div>
          </div>
          <div className="deck no-flip">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname"> Github </p>
                <a href="https://github.com/Jojister">
                  <img
                    src={githubwhite}
                    alt="Github Logo"
                    className="cropped-image astrowave"
                  />
                </a>
                <p className="projecttext">
                  Repositories
                  <br /> Some things I have been working on...
                  <br />
                  More projects coming along the way :0
                  <br /> <br />
                  --Click or tap on Cat--
                </p>
                <div className="bottext"></div>
              </div>
              <div className="back face"></div>
            </div>
          </div>
          <div className="deck no-flip">
            <div className="card hovercard">
              <div className="front face">
                <p className="projectname"> Site </p>
                <p className="logo">㋐</p>
                <p className="projecttext">
                  This website! Made using HTML, CSS and JavaScript, it was fun
                  getting it all together. Imports used are: Locomotive Scroll,
                  Animated Cursor, and PIXI.
                  <br />
                  Coded through VSCode in tandem with React.
                  <br />
                  Right click & Inspect Element to see the inner workings!
                </p>
                <div className="bottext"></div>
              </div>
              <div className="back face">
                <h2>Skills</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
