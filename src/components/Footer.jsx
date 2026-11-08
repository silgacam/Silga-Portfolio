import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Footer() {
  const { language } = useContext(LanguageContext);

  const isTurkish = language === 'tr';

  return (
    <footer className="footer" id="contact">
      <h2>
        {isTurkish ? 'Mesajınızı Bekliyorum!' : 'Send me a message!'}
      </h2>

      <p>
        {isTurkish ? (
          <>
            Bir sorunuz, projeniz veya sadece
            <br />
            merhaba demek istediğiniz bir şey mi var?
          </>
        ) : (
          <>
            Got a question or proposal, or just want
            <br />
            to say hello? Go ahead.
          </>
        )}
      </p>

      <a className="emailLink" href="mailto:silgaacam@gmail.com">
        silgaacam@gmail.com
      </a>

      <div className="footerLinks">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
          <svg viewBox="0 0 24 24">
            <path
              d="M22 5.9a8 8 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.74A11.64 11.64 0 0 1 3.4 4.74a4.1 4.1 0 0 0 1.27 5.48 4.08 4.08 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.22 8.22 0 0 1 2 18.4a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68l-.01-.53A8.35 8.35 0 0 0 22 5.9Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a href="https://codepen.io/" target="_blank" rel="noreferrer" aria-label="CodePen">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 2 22 8.5v7L12 22 2 15.5v-7L12 2Zm0 2.4L4.2 9.5 12 14.6l7.8-5.1L12 4.4Zm-8 7v3l6 3.9v-3l-6-3.9Zm16 0-6 3.9v3l6-3.9v-3Zm-7 5.2v3l6-3.9-2.8-1.8-3.2 2.7Zm-2 0-3.2-2.7L5 15.7l6 3.9v-3Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a href="mailto:silgaacam@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24">
            <text x="2" y="20" fontSize="22" fontWeight="bold" fill="currentColor">@</text>
          </svg>
        </a>

        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;