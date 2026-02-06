import React from 'react';
import './Business.css';

const Business: React.FC = () => {
  return (
    <div className="business-page">
      <section className="page-header">
        <div className="container">
          <h1>事業紹介</h1>
          <p>豊富な知識と高い技術力で質の高いサービスを提供</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-text">
            <p>
              私たちソネットには、長年にわたり培ってきた豊富な知識と高い技術力をベースに、質の高いサービスを提供できるエンジニアが多数在籍しております。システム（アプリ）開発から環境構築、運用まで、一つ一つ異なるお客さまのニーズに対応した、幅広いサービスを提供いたします。
            </p>
          </div>

          <h2 className="section-title">当社エンジニア業務スキル</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>一般業務</h3>
              <ul>
                <li>財務会計（10名）</li>
                <li>給与計算（7名）</li>
                <li>人事管理（6名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>製造・流通</h3>
              <ul>
                <li>仕入・買掛管理（18名）</li>
                <li>販売・売掛管理（18名）</li>
                <li>在庫管理（22名）</li>
                <li>生産管理（15名）</li>
                <li>原価管理（13名）</li>
                <li>資材管理（9名）</li>
                <li>外注管理（4名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>公共</h3>
              <ul>
                <li>戸籍（9名）</li>
                <li>住民（11名）</li>
                <li>印鑑（7名）</li>
                <li>選挙（6名）</li>
                <li>国民年金（9名）</li>
                <li>税（8名）</li>
                <li>ガス・水道（6名）</li>
                <li>財務会計（8名）</li>
                <li>人事管理（5名）</li>
                <li>介護（8名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>医療</h3>
              <ul>
                <li>医事会計（5名）</li>
                <li>オーダーリング（4名）</li>
                <li>電子カルテ（5名）</li>
                <li>検査（5名）</li>
                <li>給食（4名）</li>
                <li>病歴（5名）</li>
                <li>薬品（5名）</li>
                <li>財務会計（4名）</li>
                <li>調剤薬局（3名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>保険</h3>
              <ul>
                <li>事業所検診（4名）</li>
                <li>健保組合（5名）</li>
                <li>国保連合会（7名）</li>
                <li>介護保険（9名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>各種団体</h3>
              <ul>
                <li>共済（7名）</li>
                <li>生命保険（18名）</li>
                <li>損害保険（9名）</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>銀行</h3>
              <ul>
                <li>融資（16名）</li>
                <li>預金（9名）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-skills">
        <div className="container">
          <h2 className="section-title">当社エンジニア開発技術スキル</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>ネットワーク</h3>
              <p>ローカルネットワーク構築（25名）、ファイヤーウォール設定（24名）、ネットワークシステム構築（22名）</p>
            </div>

            <div className="tech-category">
              <h3>インターネット</h3>
              <p>Webサーバー設定（20名）、メールサーバー設定（19名）、DNSサーバー設定（18名）</p>
            </div>

            <div className="tech-category">
              <h3>OS等</h3>
              <p>Windows系サーバー（23名）、Windows系クライアント（27名）、UNIX（16名）、LINUX（17名）、各種汎用機（19名）</p>
            </div>

            <div className="tech-category">
              <h3>データベース</h3>
              <p>Oracle（25名）、SQL Server（28名）、PostgreSQL（16名）、MySQL（18名）、DB2（16名）</p>
            </div>

            <div className="tech-category">
              <h3>言語/開発ツール</h3>
              <p>COBOL（17名）、C（26名）、C++（19名）、VB（28名）、HTML（30名）、ASP（16名）、Java（23名）、VB.NET（26名）、C#.NET（29名）、ASP.NET（24名）、Access（28名）</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
