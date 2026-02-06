import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>会社概要</h1>
          <p>株式会社ソネットの企業情報</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="company-info-grid">
            <div className="info-item">
              <div className="info-label">社名</div>
              <div className="info-value">株式会社ソネット</div>
            </div>
            <div className="info-item">
              <div className="info-label">代表者</div>
              <div className="info-value">代表取締役　熊井　久隆</div>
            </div>
            <div className="info-item">
              <div className="info-label">設立</div>
              <div className="info-value">昭和60年6月（1985年6月）</div>
            </div>
            <div className="info-item">
              <div className="info-label">資本金</div>
              <div className="info-value">1,000万円</div>
            </div>
            <div className="info-item">
              <div className="info-label">従業員数</div>
              <div className="info-value">40名</div>
            </div>
            <div className="info-item">
              <div className="info-label">主要株主</div>
              <div className="info-value">株式会社銀河ホールディングス</div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">住所</div>
              <div className="info-value">
                〒950-0912<br />
                新潟県新潟市中央区南笹口2丁目1番11号　ソネット第一ビル
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">電話番号</div>
              <div className="info-value">025-244-3656</div>
            </div>
            <div className="info-item">
              <div className="info-label">FAX</div>
              <div className="info-value">025-244-4722</div>
            </div>
            <div className="info-item">
              <div className="info-label">E-mail</div>
              <div className="info-value">sonnet@sonnet-inc.co.jp</div>
            </div>
            <div className="info-item">
              <div className="info-label">取引銀行</div>
              <div className="info-value">
                大光銀行　新潟駅南支店<br />
                新潟縣信用組合　鳥屋野支店
              </div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">事業内容</div>
              <div className="info-value">
                コンピュータソフトウェアの開発、製作、販売ならびに輸出入<br />
                コンピュータソフトウェア技術者の養成、研修<br />
                コンピュータを使用する各種業務サポート<br />
                コンピュータシステムの規格、設計、構築、運用、保守<br />
                労働者派遣事業<br />
                不動産賃貸業
              </div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">加入団体</div>
              <div className="info-value">
                新潟市ソフトウエア産業協協会<br />
                新潟県IT産業ネットワーク２１
              </div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">主要取引先</div>
              <div className="info-value">
                (株)ＢＳＮアイネット、(株)ソリマチ技研、日本電子計算(株)、(株)メビウス、<br />
                (株)インテック、サイバーコム(株)、アイエックス・ナレッジ(株)　など
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">沿革</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1985年6月</div>
              <div className="timeline-content">
                株式会社ソネットを新潟市西堀通四番町に設立。資本金1,000万円。
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2007年4月</div>
              <div className="timeline-content">
                新潟市中央区天神二丁目に本社移転。
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2017年6月</div>
              <div className="timeline-content">
                株式会社銀河ホールディングスグループ傘下へ参画。
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2018年4月</div>
              <div className="timeline-content">
                東京営業所開設
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020年4月</div>
              <div className="timeline-content">
                自社ビル所有により新潟市中央区南笹口へ本社移転。
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022年9月</div>
              <div className="timeline-content">
                Microsoft Partner Network Silver取得。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
