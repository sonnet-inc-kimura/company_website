import React from 'react';
import './Message.css';

const Message: React.FC = () => {
  return (
    <div className="message-page">
      <section className="page-header">
        <div className="container">
          <h1>代表挨拶</h1>
          <p>代表取締役　熊井 久隆からのメッセージ</p>
        </div>
      </section>

      <section className="section message-content">
        <div className="container">
          <div className="message-body">
            <p>
              株式会社ソネットは、1985年に前代表の野中一克により設立されました。
            </p>
            <p>
              創業以来30有余年、厳しい状況の中でもNever give upの精神で乗り越えて成長を遂げてまいりましたが縁あって2018年に銀河グループの仲間になって頂きました。
            </p>
            <p>
              銀河グループに招く際、野中前代表と話し合う中で強く共感したのは社員一人一人を会社の歯車と考えず個性ある一個の人間として向き合う姿勢や、社員の成長を心から喜ぶ姿勢でした。銀河グループの理念である「社員一人一人が光を放てる会社でありたい」という方向性と全く同じものだと確信したのです。
            </p>
            <p>
              銀河グループの仲間となってからは、グループが30年以上にわたって蓄積してきた社員教育の仕組みを活用し、より一層若手の育成、高度な技術力の習得ができるようになり、社員一人一人が社会に貢献できる活動範囲が広がってきました。
            </p>
            <p>
              ソネットは、社員一人一人が輝けるように高い技術力を活かし、社員が喜びを感じる仕事を準備することにより、より一層社員が成長することに寄与するだけでなく、お客様の満足度向上に繋げていき、ひいてはエンジニアとして社会全体への貢献につなげていきます。
            </p>
            <p>
              ソネットは全社員にとって成長のためのインフラであり、成長を育み、一人一人を尊重して社員が幸福を感じる会社として進んでいきます。
            </p>
            <p className="highlight-text">
              今後は「新潟で最も人が育つ会社」社会や社員に対して価値ある存在になります。
            </p>
            <div className="signature">
              <p className="date">2023年2月1日</p>
              <p className="name">株式会社ソネット<br />代表取締役　熊井 久隆</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
