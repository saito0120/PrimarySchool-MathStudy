import { HashRouter, Routes, Route } from "react-router-dom";
import SelectionScreen from "./selection.jsx";
import TitleScreen from "./Title.jsx";  

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<TitleScreen />} />
        <Route path="/selection" element={<SelectionScreen />} />

      </Routes>
    </HashRouter>
  );
}

export default App;


