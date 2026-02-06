import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-text">SONNET</span>
            <span className="logo-subtitle">INC.</span>
          </Link>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/about">会社概要</Link></li>
            <li><Link to="/message">代表挨拶</Link></li>
            <li><Link to="/business">事業紹介</Link></li>
            <li><Link to="/recruit">採用情報</Link></li>
            <li><Link to="/contact" className="nav-cta">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
