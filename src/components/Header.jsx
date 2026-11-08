import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import silgaImage from '../assets/silga.png';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const isTurkish = language === 'tr';

  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">şılga</h2>

        <div className="navActions">
          <button className="languageButton" onClick={toggleLanguage}>
            {isTurkish ? (
              <>
                <span>SWITCH TO </span>
                <span className="activeLanguage">ENGLISH</span>
              </>
            ) : (
              <>
                <span className="activeLanguage">TÜRKÇE</span>
                <span>'YE GEÇ</span>
              </>
            )}
          </button>

          <button className="themeButton" onClick={toggleTheme}>
            <span className="themeSwitch">
              <span className={isDarkMode ? 'dark' : ''}></span>
            </span>
            {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </button>
        </div>
      </nav>

      <section className="silga">
        <div className="silgaContent">
          <h1>
            {isTurkish ? (
              <>Ben bir Ön Yüz<br />Geliştirici'yim...</>
            ) : (
              <>I am a Frontend<br />Developer...</>
            )}
          </h1>

          <p>
            {isTurkish
              ? '...kullanıcı deneyimini önemseyen, sağlam ve ölçeklenebilir frontend ürünleri geliştirmeyi seven biriyim.'
              : '...who likes to craft solid and scalable frontend products with great user experiences.'}
          </p>

          <div className="socialLinks">
            <a href="https://github.com/silgacam" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
  fill="currentColor"
  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z"
/>
              </svg>
              Github
            </a>

            <a href="https://www.linkedin.com/in/silgacam/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.05A3.95 3.95 0 0 1 16.7 8.7c3.9 0 4.6 2.55 4.6 5.87V21h-3.8v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21H9.5V9Z"
                />
              </svg>
              Linkedin
            </a>
          </div>
        </div>

        <div className="silgaImage">
          <img src={silgaImage} alt="Silga" />
        </div>
      </section>
    </header>
  );
}

export default Header;