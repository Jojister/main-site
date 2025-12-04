import React, { useState } from 'react';
import astrowavelogo from "../images/astrowavebeige.jpg";
import githubwhite from "../images/githubw.png";
import fishtotebag from "../images/fishtote.JPG";
import defaux from "../images/defaux.png";
import summit from "../images/summit-app-icon.png";
import starcast from "../images/starcast.png"; // Add your Starcast image
import { useLanguage } from "../context/LanguageProvider";

const projectsData = [
  {
    id: "starcast",
    name: "Starcast",
    nameJp: "スターキャスト",
    image: null, // Will use starcast import
    role: "Lead Developer",
    roleJp: "リード開発者",
    date: "March 2025 - April 2025",
    dateJp: "2025年3月 - 2025年4月",
    problem: "Stargazers lack a unified tool to check weather, air quality, and light pollution conditions for astronomical observations.",
    problemJp: "天体観測者には、天気、大気質、光害の状況を一括で確認できるツールがありませんでした。",
    solution: "Developed a functional Android application that aggregates real-time weather, AQI, and light pollution APIs with a custom visibility index to help users plan stargazing sessions.",
    solutionJp: "リアルタイムの天気、AQI、光害APIを集約し、カスタム視認性指数を備えたAndroidアプリを開発。ユーザーが天体観測を計画できるようにしました。",
    skills: ["Android Studio", "Kotlin", "REST API", "API Integration"],
    shortDesc: "Android app for stargazing conditions & astronomical observation planning.",
    shortDescJp: "天体観測条件と計画のためのAndroidアプリ。"
  },
  {
    id: "defaux",
    name: "DeFaux",
    nameJp: "DeFaux",
    image: null, // Will use defaux import
    role: "Full Stack Developer",
    roleJp: "フルスタック開発者",
    date: "February 2025 - March 2025",
    dateJp: "2025年2月 - 2025年3月",
    problem: "AI-generated misinformation is spreading rapidly, and there's no reliable way to verify the authenticity of images.",
    problemJp: "AI生成の誤情報が急速に広がっており、画像の真正性を確認する信頼できる方法がありませんでした。",
    solution: "Created a website to combat AI misinformation by verifying images using public blockchain and encryption. Utilized Ethereum to keep data secure and allow for verification through a middleman server.",
    solutionJp: "公開ブロックチェーンと暗号化を使用して画像を検証し、AI誤情報と戦うウェブサイトを作成。Ethereumを活用してデータを安全に保ち、中間サーバーを通じて検証を可能にしました。",
    skills: ["Next.js", "React", "MongoDB", "Solidity", "Ethereum"],
    shortDesc: "Blockchain-based AI image verification platform.",
    shortDescJp: "ブロックチェーンベースのAI画像検証プラットフォーム。"
  },
  {
    id: "summit",
    name: "Summit",
    nameJp: "Summit",
    image: null, // Will use summit import
    role: "Frontend Developer",
    roleJp: "フロントエンド開発者",
    date: "January 2025",
    dateJp: "2025年1月",
    problem: "Students struggle to understand and manage their debt, lacking tools for financial visualization and personalized guidance.",
    problemJp: "学生は借金の理解と管理に苦労しており、財務の可視化や個別のガイダンスツールが不足していました。",
    solution: "Built a mobile application to inform students about debt by visualizing finances and adding a personalized AI chatbot. Used Axios for HTTPS calls and Postman for API testing, ensuring seamless backend connection.",
    solutionJp: "財務を可視化し、パーソナライズされたAIチャットボットを追加することで、学生に借金について情報提供するモバイルアプリを構築。AxiosでHTTPS呼び出し、PostmanでAPIテストを行い、バックエンドとのシームレスな接続を確保しました。",
    skills: ["React Native", "Postman", "MongoDB", "Axios", "Node.js"],
    shortDesc: "Student debt visualization app with AI chatbot.",
    shortDescJp: "AIチャットボット付き学生ローン可視化アプリ。"
  },
  {
    id: "astrowave",
    name: "Astrowave",
    nameJp: "アストロウェーブ",
    image: null, // Will use astrowavelogo import
    role: "CEO & Founder",
    roleJp: "CEO・創業者",
    date: "2022 - 2023",
    dateJp: "2022年 - 2023年",
    problem: "Broken surfboards end up in landfills, contributing to environmental waste in coastal communities.",
    problemJp: "壊れたサーフボードが埋立地に捨てられ、沿岸地域の環境廃棄物に貢献していました。",
    solution: "Founded a renewable jewelry company that upcycles broken surfboards into unique accessories using D-Limonene solvent. Received and repaid investment from STIHL. Created handwoven bracelets with quality packaging.",
    solutionJp: "D-リモネン溶剤を使用して壊れたサーフボードをユニークなアクセサリーにアップサイクルする再生可能なジュエリー会社を設立。STIHLから投資を受け、返済完了。高品質パッケージの手編みブレスレットを制作。",
    skills: ["Product Management", "Pitching", "Organic Chemistry", "Excel", "Business Development"],
    shortDesc: "Eco-friendly jewelry from recycled surfboards.",
    shortDescJp: "リサイクルサーフボードからのエコジュエリー。",
    link: "https://docs.google.com/presentation/d/1xCezcRiJelyxnovzaO_5F_CNAwmGXOmL6ayBbI7RzFM/edit?usp=sharing",
    linkText: "View STIHL Pitch",
    linkTextJp: "STIHLピッチを見る"
  },
  {
    id: "mac",
    name: "Multimedia Art Club",
    nameJp: "マルチメディアアートクラブ",
    image: null, // Will use fishtotebag import
    role: "Co-President & Founder",
    roleJp: "共同会長・創設者",
    date: "2023 - Present",
    dateJp: "2023年 - 現在",
    problem: "Students lacked a creative community to explore different artistic mediums and connect with like-minded individuals.",
    problemJp: "学生には、さまざまな芸術媒体を探求し、同じ志を持つ人々とつながる創造的なコミュニティがありませんでした。",
    solution: "Founded and led a club where members explore various mediums. Planned events including totebag paintings, Bob Ross tutorials, charcoal, and spray paint sessions. Managed $1,200 annual budget with 20-30 average attendance per event.",
    solutionJp: "メンバーがさまざまな媒体を探求するクラブを設立・主導。トートバッグペイント、ボブ・ロスチュートリアル、木炭画、スプレーペイントセッションなどのイベントを企画。年間予算1,200ドルを管理し、イベントごとの平均参加者数20-30人。",
    skills: ["Event Planning", "Financial Management", "Oil Painting", "Acrylic", "Leadership"],
    shortDesc: "Art club for exploring creative mediums.",
    shortDescJp: "創造的な媒体を探求するアートクラブ。"
  }
];

// Map project IDs to imported images
const imageMap = {
  starcast: starcast,
  defaux: defaux,
  summit: summit,
  astrowave: astrowavelogo,
  mac: fishtotebag
};

const Project = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="project">
      <div className="project-box">
        <p className="project-title">
          {language === "english" ? "PROJECTS" : "プロジェクト"}
        </p>
      </div>
      
      <div className="project-style">
        <div className="project-grid">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openProject(project)}
            >
              <div className="project-card-image">
                <img 
                  src={imageMap[project.id]} 
                  alt={project.name} 
                />
              </div>
              <div className="project-card-content">
                <span className="project-card-date">
                  {language === "english" ? project.date : project.dateJp}
                </span>
                <h3 className="project-card-title">
                  {language === "english" ? project.name : project.nameJp}
                </h3>
                <p className="project-card-desc">
                  {language === "english" ? project.shortDesc : project.shortDescJp}
                </p>
                <div className="project-card-skills">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* GitHub Card */}
          <a 
            href="https://github.com/Jojister" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card github-card"
          >
            <div className="project-card-image github-image">
              <img src={githubwhite} alt="GitHub" />
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">GitHub</h3>
              <p className="project-card-desc">
                {language === "english" 
                  ? "View more projects and repositories" 
                  : "その他のプロジェクトとリポジトリを見る"}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProject}>
              ✕
            </button>
            
            <div className="project-modal-header">
              <img 
                src={imageMap[selectedProject.id]} 
                alt={selectedProject.name}
                className="project-modal-image"
              />
              <div className="project-modal-title-section">
                <h2>{language === "english" ? selectedProject.name : selectedProject.nameJp}</h2>
                <span className="project-modal-role">
                  {language === "english" ? selectedProject.role : selectedProject.roleJp}
                </span>
                <span className="project-modal-date">
                  {language === "english" ? selectedProject.date : selectedProject.dateJp}
                </span>
              </div>
            </div>

            <div className="project-modal-body">
              <div className="project-modal-section">
                <h4>{language === "english" ? "Problem" : "課題"}</h4>
                <p>{language === "english" ? selectedProject.problem : selectedProject.problemJp}</p>
              </div>
              
              <div className="project-modal-section">
                <h4>{language === "english" ? "Solution" : "解決策"}</h4>
                <p>{language === "english" ? selectedProject.solution : selectedProject.solutionJp}</p>
              </div>
              
              <div className="project-modal-section">
                <h4>{language === "english" ? "Technologies" : "技術"}</h4>
                <div className="project-modal-skills">
                  {selectedProject.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  {language === "english" ? selectedProject.linkText : selectedProject.linkTextJp} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;