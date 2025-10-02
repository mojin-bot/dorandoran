// app/components/Nav.tsx
import { Icon } from "@/app/components/Icon";

export function Nav() {
  return (
    <>
      <nav className="nav" aria-label="주요 메뉴">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" aria-current="page">
              <Icon name="home" className="nav__icon" />
              <span className="nav__text">홈</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#info" className="nav__link">
              <Icon name="info" className="nav__icon" />
              <span className="nav__text">안내</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#photo" className="nav__link">
              <Icon name="photo" className="nav__icon" />
              <span className="nav__text">사진</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <Icon name="reserve" className="nav__icon" />
              <span className="nav__text">예약</span>
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .nav {
          position: fixed;
          bottom: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
        }
        .nav__list {
          display: flex;
          justify-content: space-around;
          padding: 8px 0;
          margin: 0;
          list-style: none;
        }
        .nav__item {
          flex: 1;
          text-align: center;
        }
        .nav__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          color: #333;
          text-decoration: none;
        }
        .nav__icon {
          font-size: 20px;
          margin-bottom: 4px;
        }
        .nav__link[aria-current="page"] {
          color: #6c47ff;
        }
      `}</style>
    </>
  );
}
