import { useLanguage } from "../context/LanguageProvider";

const Contact = () => {
  const { language } = useLanguage();
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-style">
        {language === "english" ? "CONTACT ME" : "コンタクト"}
      </h2>
      <div className="centered-word-container">
        <a
          href="mailto:jojister5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          {language === "english" ? "Email" : "メール"}
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
          {language === "english" ? "Instagram" : "インスタ"}
        </a>
        <a
          href="https://www.instagram.com/jarakinn/"
          target="_blank"
          rel="noopener noreferrer"
          className="centered-word"
        >
          {language === "english" ? "Art" : "作品"}
        </a>
      </div>
    </section>
  );
};

export default Contact;