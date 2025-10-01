// app/components/Nav.tsx
export function Nav() {
  return (
    <nav className="nav" aria-label="주요 메뉴">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link" aria-current="page">
            <svg className="nav__icon" aria-hidden="true">
              <use href="#icon-home" />
            </svg>
            <span className="nav__text">홈</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#info" className="nav__link">
            <svg className="nav__icon" aria-hidden="true">
              <use href="#icon-info" />
            </svg>
            <span className="nav__text">안내</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#photo" className="nav__link">
            <svg className="nav__icon" aria-hidden="true">
              <use href="#icon-photo" />
            </svg>
            <span className="nav__text">사진</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            <svg className="nav__icon" aria-hidden="true">
              <use href="#icon-reserve" />
            </svg>
            <span className="nav__text">예약</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
// app/components/IconSprite.tsx
export function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      </symbol>
      <symbol id="icon-info" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </symbol>
      <symbol id="icon-photo" viewBox="0 0 24 24">
        <path d="M21 5H3v14h18V5zm-2 2v10H5V7h14zm-3.5 2-2 3-1.5-2L9 14h8l-3.5-5z" />
      </symbol>
      <symbol id="icon-reserve" viewBox="0 0 24 24">
        <path d="M16 2v2h3a1 1 0 0 1 1 1v3H4V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2zm4 8v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16z" />
      </symbol>
    </svg>
  );
}
