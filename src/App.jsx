import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage";
import BookingPage from "./pages/BookingPage";


function App() {
return (  
    <>
   <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/quote" element={<BookingPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
