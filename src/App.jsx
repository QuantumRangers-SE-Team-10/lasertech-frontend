import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import DefaultSplashPage from '../pages/DefaultSplashPage';
import TestAPI from '../pages/testAPI';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultSplashPage />} />
          <Route path="/testAPI" element={<TestAPI />} />
          {/* Add routes to pages here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
