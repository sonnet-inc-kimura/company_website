import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import './Home.css';

const Home: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <ParticleBackground />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fadeIn">Since 1985</div>
            <h1 className="hero-title animate-fadeInUp">
              新潟で長年信頼される<br />
              <span className="text-gradient">IT技術者集団</span>
            </h1>
            <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              常に時代の最先端技術を取り入れ<br />
              お客様へ確かな技術を提供し続けます<br />
              一歩先を行く技術で 常にチャレンジを続けます
            </p>
            <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn btn-primary">
                お問い合わせ
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-outline">会社概要</Link>
            </div>
            <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="stat-item">
                <div className="stat-number">40年</div>
                <div className="stat-label">の実績</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">40名</div>
                <div className="stat-label">のエンジニア</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">の技術スキル</div>
              </div>
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
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">私たちの強み</h2>
            <p className="section-subtitle">長年培った技術力と信頼で、お客様のビジネスをサポート</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  <path d="M12 2c2.5 0 4.5 4.5 4.5 10s-2 10-4.5 10-4.5-4.5-4.5-10S9.5 2 12 2z"/>
                </svg>
              </div>
              <h3>豊富な実績</h3>
              <p>1985年の創業以来、40年近くにわたり新潟を中心に信頼される技術サービスを提供してきました。銀河グループの一員として、より強固な体制でお客様をサポートします。</p>
              <div className="feature-number">01</div>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.6.6L2.5 7.7c-.7.7-.7 1.9 0 2.6l7.1 7.1c.7.7 1.9.7 2.6 0l7.1-7.1c.7-.7.7-1.9 0-2.6L12.2.6c-.7-.8-1.9-.8-2.6 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M12 13v8"/>
                </svg>
              </div>
              <h3>高い技術力</h3>
              <p>30以上の多様な業務スキルと最新の開発技術を持つエンジニアが、お客様のニーズに応じた最適なソリューションを提供します。</p>
              <div className="feature-number">02</div>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>人材育成</h3>
              <p>銀河グループの教育ノウハウを活用し、「新潟で最も人が育つ会社」として社員の成長をサポートします。未経験者にも丁寧な指導を行います。</p>
              <div className="feature-number">03</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">技術スタック</h2>
            <p className="section-subtitle">最新技術から実績ある技術まで幅広くカバー</p>
          </div>

          <div className="tech-categories">
            <div className="tech-category animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>開発言語</h3>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">PHP</span>
              </div>
            </div>

            <div className="tech-category animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <h3>データベース</h3>
              <div className="tech-tags">
                <span className="tech-tag">Oracle</span>
                <span className="tech-tag">SQL Server</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MySQL</span>
              </div>
            </div>

            <div className="tech-category animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <h3>フレームワーク</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">.NET</span>
                <span className="tech-tag">Spring</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="section business-areas">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">事業領域</h2>
            <p className="section-subtitle">幅広い業務領域と技術力でお客様をサポート</p>
          </div>
          
          <div className="business-grid">
            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>一般業務</h3>
              <p>財務会計、給与計算、人事管理システムの開発と運用</p>
            </div>

            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>製造・流通</h3>
              <p>在庫管理、生産管理、販売管理など製造業向けシステム</p>
            </div>

            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                </svg>
              </div>
              <h3>公共・行政</h3>
              <p>戸籍、住民、税務など公共システムの開発実績多数</p>
            </div>

            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>医療</h3>
              <p>医事会計、電子カルテ、検査システムなど医療機関向けシステム</p>
            </div>

            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <h3>金融・保険</h3>
              <p>融資、預金、各種保険システムの開発と保守</p>
            </div>

            <div className="business-item animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="business-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>システム運用</h3>
              <p>システムの構築から運用・保守まで一貫したサポート</p>
            </div>
          </div>

          <div className="cta-center animate-on-scroll">
            <Link to="/business" className="btn btn-primary">
              事業紹介を詳しく見る
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>お気軽にお問い合わせください</h2>
            <p>システム開発、技術支援など、お客様のニーズに合わせたソリューションをご提案します</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white">
                お問い合わせ
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <div className="contact-info-inline">
                <span className="phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  TEL: 025-244-3656
                </span>
                <span className="time">受付時間: 9:00〜17:30（土日祝を除く）</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
