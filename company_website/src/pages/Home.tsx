import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <ParticleBackground />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              新潟で長年信頼される<br />
              <span className="highlight">IT技術者集団</span>
            </h1>
            <p className="hero-subtitle">
              常に時代の最先端技術を取り入れ<br />
              お客様へ確かな技術を提供し続けます<br />
              一歩先を行く技術で 常にチャレンジを続けます
            </p>
            <div className="hero-cta">
              <a href="/contact" className="btn btn-primary">お問い合わせ</a>
              <a href="/about" className="btn btn-outline">会社概要</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">私たちの強み</h2>
          <p className="section-subtitle">長年培った技術力と信頼で、お客様のビジネスをサポート</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>豊富な実績</h3>
              <p>1985年の創業以来、40年近くにわたり新潟を中心に信頼される技術サービスを提供してきました。</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>高い技術力</h3>
              <p>多様な業務スキルと開発技術を持つエンジニアが、お客様のニーズに応じた最適なソリューションを提供します。</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>人材育成</h3>
              <p>銀河グループの教育ノウハウを活用し、「新潟で最も人が育つ会社」として社員の成長をサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="section numbers-section">
        <div className="container">
          <div className="numbers-grid">
            <div className="number-card">
              <div className="number">40年</div>
              <div className="number-label">の実績</div>
            </div>
            <div className="number-card">
              <div className="number">40名</div>
              <div className="number-label">のエンジニア</div>
            </div>
            <div className="number-card">
              <div className="number">30+</div>
              <div className="number-label">の技術スキル</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">事業紹介</h2>
          <p className="section-subtitle">幅広い業務領域と技術力でお客様をサポート</p>
          
          <div className="services-grid">
            <div className="service-item">
              <h3>業務スキル</h3>
              <p>財務会計、生産管理、公共システム、医療システムなど、多様な業務領域に対応</p>
            </div>
            <div className="service-item">
              <h3>能力スキル</h3>
              <p>市場調査から企画、設計、製造、テスト、運用まで一貫したサポート</p>
            </div>
            <div className="service-item">
              <h3>技術スキル</h3>
              <p>最新の開発言語、データベース、ネットワーク技術に精通したエンジニアが対応</p>
            </div>
          </div>

          <div className="cta-center">
            <a href="/business" className="btn btn-primary">詳しく見る</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>お気軽にお問い合わせください</h2>
          <p>システム開発、技術支援など、お客様のニーズに合わせたソリューションをご提案します</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-white">お問い合わせ</a>
            <div className="contact-info-inline">
              <span>TEL: 025-244-3656</span>
              <span className="time">受付時間: 9:00〜17:30（土日祝を除く）</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
