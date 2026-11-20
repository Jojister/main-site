import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-style">
        {t("CONTACT ME", "コンタクト")}
      </h2>
      <div className="centered-word-container">
        <a
          href="mailto:jojister5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          {t("Email", "メール")}
        </a>
        <a
          href="https://www.linkedin.com/in/joji-araki/"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/jojister_/"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          {t("Instagram", "インスタ")}
        </a>
        <a
          href="https://www.instagram.com/jarakinn/"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          {t("Art", "作品")}
        </a>
      </div>
    </section>
  );
};

export default Contact;