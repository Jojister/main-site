import { useLanguage } from "../context/LanguageContext";

const LINKS = [
  { href: "mailto:jojister5@gmail.com", en: "Email me", jp: "メールする", external: false },
  { href: "https://www.linkedin.com/in/joji-araki/", en: "LinkedIn ↗", jp: "LinkedIn ↗", external: true },
  { href: "https://www.instagram.com/jojister_/", en: "Instagram ↗", jp: "インスタグラム ↗", external: true },
  { href: "https://www.instagram.com/jarakinn/", en: "Art on Instagram ↗", jp: "作品のインスタグラム ↗", external: true },
];

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t("Contact", "コンタクト")}</h2>
      <p className="contact-intro">
        {t(
          "Questions about a project, a print or a commission? Get in touch.",
          "プロジェクト、プリント、作品依頼についてのご質問はお気軽にどうぞ。"
        )}
      </p>
      <ul className="contact-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="contact-link"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {t(link.en, link.jp)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
