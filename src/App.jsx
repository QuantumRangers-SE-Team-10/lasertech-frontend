import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import Splash from '../pages/Splash';
import TestAPI from '../pages/testAPI';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/testAPI" element={<TestAPI />} />
          {/* Add routes to pages here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
