import { useLanguage } from "../context/LanguageProvider";

const Contact = () => {
    const { language } = useLanguage();
    return (
        <section id="contact" className="contact-section">
          <br />
          <h2 className="contact-style">
          {language === 'english' ? 'CONTACT ME' : 'コンタクト'}
          </h2>
          <div className="centered-word">
            <a
              href="mailto:jojister5@gmail.com"
              target="email"
              className="centered-word"
            >
               {language === 'english' ? 'Email' : 'メール'}
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/joji-araki/"
              target="linkedin"
              className="centered-word"
            >
               {language === 'english' ? 'LinkedIn' : 'リンクトイン'}
            </a>
            <br />
            <a
              href="https://www.instagram.com/jojister_/"
              target="instagram"
              className="centered-word"
            >
              {language === 'english' ? 'Instagram' : 'インスタ'}
            </a>
            <br />
            <a
              href="https://www.instagram.com/jarakinn/"
              target="artinstagram"
              className="centered-word"
            >
              {language === 'english' ? 'Art' : '作品'}
            </a>
          </div>
        </section>
    )
}

export default Contact;