import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorIntroductionPage from './TutorIntroductionPage';
import { TailwindPage } from './TailwindPage';
import { LandingPage } from './LandingPage';
import { Navigation } from './Navigation';

function App() {
    return (
        <Router>
            <h1 className="text-3xl font-bold text-center py-4 text-pink-800">My Notes for Mastering Tailwind</h1>
            <Navigation />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/tailwind-practice"
                    element={<TutorIntroductionPage />}
                />
                <Route path="/tailwind-properties" element={<TailwindPage />} />
            </Routes>
        </Router>
    );
}

export default App;
