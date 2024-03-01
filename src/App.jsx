import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import Splash from "../pages/Splash";
import TestAPI from "../pages/testAPI";
import Onboarding from "../pages/onboarding";
import Game from "../pages/Game";
import PlayerDisplay from "./components/playerDisplay"; // delete after testing
import PlayerAction from "./components/playerAction"; // delete after testing

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/testAPI" element={<TestAPI />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path= "/game" element={<Game />} />
          <Route path= "/playerDisplay" element={<PlayerDisplay />} /> {/* delete after testing */}
          <Route path= "/playerAction" element={<PlayerAction />} />  {/* delete after testing */}
          {/* Add routes to pages here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
