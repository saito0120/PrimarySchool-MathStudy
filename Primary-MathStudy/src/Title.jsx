import './Title.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const texts = [
  "小学校の数学、もう一度チャレンジ！",
  "周りと差をつけて楽な中学校生活にしたいよね？",
  "計算や図形、楽しく復習しよう！",
]

function TitleScreen() {
  const [step, setStep] = useState(0); 
  const navigate = useNavigate();

  const handleClick = () => {
    setStep(step + 1);
  };


  let content;

    if (step === 0) {
      content = (
        <>
        <h1 className="fade">PrimaryMathStudy</h1>
        <p className="fade">Saito Daigo</p>
        </>
      );

    } else if (step <= texts.length) {
        content = (
          <p className="fade">
            {texts[step - 1]}
          </p>
      );

    } else {
        content = 
          <button
            className = "start-button"
            onClick = {(e) => {
            e.stopPropagation();
              console.log("次の画面へ");
              navigate("/selection");
            }}
          >始めよう！
          </button>
  };

  return (
    <div className="Title-Background" onClick={handleClick}>
      {content}
    </div>
  );

}

export default TitleScreen;