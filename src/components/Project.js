import React, { useState } from "react";
import githubwhite from "../images/githubw.png";
import projects from "../data/projects.json";
import imageMap from "../utils/imageMap";
import { useLanguage } from "../context/LanguageContext";

const Project = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const close = () => setSelected(null);

  return (
    <section id="projects" className="project">
      <div className="project-box">
        <p className="project-title">{t("PROJECTS", "プロジェクト")}</p>
      </div>

      <div className="project-style">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelected(project)}>
              <div className="project-card-image">
                <img src={imageMap[project.image]} alt={project.name} />
              </div>
              <div className="project-card-content">
                <span className="project-card-date">{t(project.date, project.dateJp)}</span>
                <h3 className="project-card-title">{t(project.name, project.nameJp)}</h3>
                <p className="project-card-desc">{t(project.shortDesc, project.shortDescJp)}</p>
                <div className="project-card-skills">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

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
                {t("View more projects and repositories", "その他のプロジェクトとリポジトリを見る")}
              </p>
            </div>
          </a>
        </div>
      </div>

      {selected && (
        <div className="project-modal-overlay" onClick={close}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={close} aria-label="Close">
              ✕
            </button>

            <div className="project-modal-header">
              <img src={imageMap[selected.image]} alt={selected.name} className="project-modal-image" />
              <div className="project-modal-title-section">
                <h2>{t(selected.name, selected.nameJp)}</h2>
                <span className="project-modal-role">{t(selected.role, selected.roleJp)}</span>
                <span className="project-modal-date">{t(selected.date, selected.dateJp)}</span>
              </div>
            </div>

            <div className="project-modal-body">
              <div className="project-modal-section">
                <h4>{t("Problem", "課題")}</h4>
                <p>{t(selected.problem, selected.problemJp)}</p>
              </div>

              <div className="project-modal-section">
                <h4>{t("Solution", "解決策")}</h4>
                <p>{t(selected.solution, selected.solutionJp)}</p>
              </div>

              <div className="project-modal-section">
                <h4>{t("Technologies", "技術")}</h4>
                <div className="project-modal-skills">
                  {selected.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {selected.link && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                  {t(selected.linkText, selected.linkTextJp)} ↗
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
