import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import Splash from "../pages/splash";
import TestAPI from "../pages/testAPI";
import Onboarding from "../pages/onboarding";
import Game from "../pages/game";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/testAPI" element={<TestAPI />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
