import "./App.css";
import ProfileCard from "./components/ProfileCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TutorIntroductionPage from "./TutorIntroductionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TutorIntroductionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
