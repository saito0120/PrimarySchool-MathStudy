import React from "react";
import { useNavigate } from "react-router-dom";
import "./selection.css";
import logo from "./images/selection-header.png"; // ロゴ画像をここに置く

function Selection() {

  const navigate = useNavigate();
  
  return (
    <div className="selection-background">
      
      <header className="header">
        <img src={logo} alt="アプリロゴ" className="logo" />
      </header>

      <h1>モード選択画面</h1>

      <button 
      className = "mode-button"
      onClick={() => navigate("/Chapter")}>
      章立てで進める
      </button>

      <button className="mode-button">苦手克服ドリル</button>
      <button className="mode-button">実力テスト</button>

      <button className="decide-button">決定</button>
    </div>
  );
}

export default Selection;