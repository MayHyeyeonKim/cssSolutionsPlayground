import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorIntroductionPage from './TutorIntroductionPage';
import { TailwindPage } from './TailwindPage';
import { LandingPage } from './LandingPage';
import { Navigation } from './Navigation';

function App() {
    return (
        <Router>
            <h1 className="text-lg font-bold">My App</h1>
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
