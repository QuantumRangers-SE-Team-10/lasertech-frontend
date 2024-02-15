import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import DefaultSplashPage from '../pages/DefaultSplashPage';
import TestAPI from '../pages/testAPI';
import Onboarding from '../pages/onboarding';
import SplashPage from '../pages/splashpage';


import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/testAPI" element={<TestAPI />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={<SplashPage />} />
          {/* Add routes to pages here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
