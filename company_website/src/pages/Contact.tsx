import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせを受け付けました。担当者より折り返しご連絡させていただきます。');
    // 実際のフォーム送信処理をここに実装
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>お問い合わせ</h1>
          <p>ご質問・ご相談はお気軽にどうぞ</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>お問い合わせ先</h2>
              
              <div className="info-card">
                <h3>株式会社ソネット</h3>
                <div className="info-row">
                  <span className="label">住所</span>
                  <span className="value">
                    〒950-0912<br />
                    新潟県新潟市中央区南笹口2丁目1番11号<br />
                    ソネット第一ビル
                  </span>
                </div>
                <div className="info-row">
                  <span className="label">TEL</span>
                  <span className="value">025-244-3656</span>
                </div>
                <div className="info-row">
                  <span className="label">FAX</span>
                  <span className="value">025-244-4722</span>
                </div>
                <div className="info-row">
                  <span className="label">E-mail</span>
                  <span className="value">sonnet@sonnet-inc.co.jp</span>
                </div>
                <div className="info-row">
                  <span className="label">受付時間</span>
                  <span className="value">9:00〜17:30（土日祝を除く）</span>
                </div>
              </div>

              <div className="notice">
                <h3>お電話でのお問い合わせ</h3>
                <p>
                  お急ぎの方は、上記電話番号までお気軽にお電話ください。<br />
                  担当者が丁寧にご対応いたします。
                </p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">お名前 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">会社名・団体名</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">電話番号</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">お問い合わせ種別 <span className="required">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービスについて</option>
                    <option value="recruit">採用について</option>
                    <option value="estimate">お見積り依頼</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">お問い合わせ内容 <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">送信する</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
