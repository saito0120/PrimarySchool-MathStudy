import { HashRouter, Routes, Route } from "react-router-dom";
import Chapter from "./Chapter";
import Selection from "./selection.jsx";
import Title from "./Title.jsx";  

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Title />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/Chapter" element={<Chapter />} />

      </Routes>
    </HashRouter>
  );
}

export default App;


