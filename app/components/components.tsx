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
