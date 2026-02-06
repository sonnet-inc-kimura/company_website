import React from 'react';
import './Recruit.css';

const Recruit: React.FC = () => {
  return (
    <div className="recruit-page">
      <section className="page-header">
        <div className="container">
          <h1>採用情報</h1>
          <p>未経験者大歓迎！一緒に成長しましょう</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="recruit-intro">
            <h2>未経験者大歓迎！</h2>
            <p>
              当社では現役エンジニアが、分かりやすい教育コンテンツに則りご指導致します。<br />
              「新潟で最も人が育つ会社」として、あなたの成長を全力でサポートします。
            </p>
          </div>

          <div className="recruit-details">
            <div className="detail-item">
              <h3>職種</h3>
              <div className="detail-content">
                <p>1. システムエンジニア<br />2. プログラマー</p>
              </div>
            </div>

            <div className="detail-item">
              <h3>資格</h3>
              <div className="detail-content">
                <p>
                  高卒以上<br />
                  経験者、未経験者とも歓迎<br />
                  ※ 障害のある方の採用も積極的に行っています
                </p>
              </div>
            </div>

            <div className="detail-item">
              <h3>勤務地</h3>
              <div className="detail-content">
                <p>新潟県内</p>
              </div>
            </div>

            <div className="detail-item">
              <h3>勤務時間</h3>
              <div className="detail-content">
                <p>
                  9:00～17:30<br />
                  ※ 勤務地により若干の変更有り　実働7時間30分
                </p>
              </div>
            </div>

            <div className="detail-item">
              <h3>給与</h3>
              <div className="detail-content">
                <p>
                  月額¥180,000以上<br />
                  ※ 年齢、経験、能力を考慮の上、弊社既定により優遇
                </p>
              </div>
            </div>

            <div className="detail-item">
              <h3>賞与</h3>
              <div className="detail-content">
                <p>年２回支給</p>
              </div>
            </div>

            <div className="detail-item">
              <h3>待遇</h3>
              <div className="detail-content">
                <p>
                  昇給年1回<br />
                  手当：交通費(規定内)、時間外、資格一時金
                </p>
              </div>
            </div>

            <div className="detail-item">
              <h3>福利厚生</h3>
              <div className="detail-content">
                <p>
                  各種社会保険完備(健康保険、厚生年金、雇用保険、労災保険)<br />
                  慶弔見舞金、社員研修制度、予防接種費用補助制度、定期健康診断
                </p>
              </div>
            </div>

            <div className="detail-item">
              <h3>休日休暇</h3>
              <div className="detail-content">
                <p>
                  週休2日制(土、日、祝日休み)<br />
                  年末年始、夏季休暇、慶弔休暇、有休休暇、育児休暇
                </p>
              </div>
            </div>

            <div className="detail-item full-width">
              <h3>連絡先</h3>
              <div className="detail-content">
                <p>
                  〒950-0912<br />
                  新潟県新潟市中央区南笹口2丁目1番11号　ソネット第一ビル<br />
                  TEL：025-244-3656　FAX：025-244-4722
                </p>
              </div>
            </div>
          </div>

          <div className="recruit-cta">
            <h3>エントリー・お問い合わせ</h3>
            <p>採用に関するご質問や応募については、下記よりお問い合わせください。</p>
            <a href="/contact" className="btn btn-primary">お問い合わせ</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruit;
