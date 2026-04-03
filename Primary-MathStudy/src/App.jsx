import './App.css';
import React, { useState } from 'react';

const texts = [
  "小学校の数学、もう一度チャレンジ！",
  "周りと差をつけて楽な中学校生活にしたいよね？",
  "計算や図形、楽しく復習しよう！",
]

function TitleScreen() {
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [descIndex, setDescIndex] = useState(0);

  const handleClick = () => {
    if (!showDescriptions) {
      // 最初のクリックでタイトルと名前をフェードアウト
      setShowDescriptions(true);
    } else if (descIndex < texts.length - 1) {
      setDescIndex(descIndex + 1);
    } else {
      console.log("次の画面へ"); // 次画面への遷移
    }
  };

  return (
    <div className="Title-Background" onClick={handleClick}>
      {/* 最初から表示されているタイトルと名前 */}
      <h1 className={`Title ${showDescriptions ? 'fade-out' : ''}`}>PrimaryMathStudy</h1>
      <p className={`Daigo ${showDescriptions ? 'fade-out' : ''}`}>Saito Daigo</p>

      {/* 説明文 */}
      {texts.map((text, i) => (
        <p key={i} className={`texts ${showDescriptions && i === descIndex ? 'visible' : 'hidden'}`}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default TitleScreen;