// src/components/Footer/Footer.jsx
import "./Spain.css";

function Spain() {
  const year = new Date().getFullYear();
  const spainLogo = "../spain/orange-spain-svgrepo-com.svg";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a
            className="footer__logo"
            href="/"
            aria-label="Spanish Lessons home"
          >
            <img src={spainLogo} alt="" />
            Spanish Lessons
          </a>
          <p className="footer__tagline">Короткі уроки іспанської щодня.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a className="footer__link" href="/lessons">
            Уроки
          </a>
          <a className="footer__link" href="/pricing">
            Тарифи
          </a>
          <a className="footer__link" href="/about">
            Про проєкт
          </a>
          <a className="footer__link" href="/contacts">
            Контакти
          </a>
        </nav>

        <div className="footer__meta">
          <a className="footer__link" href="mailto:hello@spanish-lessons.test">
            hello@spanish-lessons.test
          </a>
          <p className="footer__copy">
            © {year} Spanish Lessons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Spain;
