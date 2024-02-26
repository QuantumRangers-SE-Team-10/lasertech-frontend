import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import Splash from "../pages/Splash";
import TestAPI from "../pages/testAPI";
import Onboarding from "../pages/onboarding";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/testAPI" element={<TestAPI />} />
          <Route path="/onboarding" element={<Onboarding />} />
          {/* Add routes to pages here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
