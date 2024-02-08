import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link
import DefaultSplashPage from '../pages/DefaultSplashPage';

import './App.css'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<DefaultSplashPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
