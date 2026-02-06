import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">SONNET</span>
              <span className="logo-subtitle">INC.</span>
            </div>
            <p className="footer-tagline">
              新潟で長年信頼されるIT技術者集団<br />
              常に時代の最先端技術を取り入れ<br />
              お客様へ確かな技術を提供し続けます
            </p>
          </div>

          <div className="footer-section">
            <h3>会社情報</h3>
            <ul>
              <li><Link to="/about">会社概要</Link></li>
              <li><Link to="/message">代表挨拶</Link></li>
              <li><Link to="/business">事業紹介</Link></li>
              <li><Link to="/recruit">採用情報</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <div className="contact-info">
              <p>
                <strong>株式会社ソネット</strong><br />
                〒950-0912<br />
                新潟市中央区南笹口2丁目1番11号<br />
                ソネット第一ビル
              </p>
              <p>
                <strong>TEL:</strong> 025-244-3656<br />
                <strong>FAX:</strong> 025-244-4722<br />
                <strong>受付時間:</strong> 9:00〜17:30（土日祝を除く）
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SONNET INC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
