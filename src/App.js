import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CandidateSolutions from './components/CandidateSolutions';
import VoterSolutions from './components/VoterSolutions';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateDetailsPage from './components/CandidateDetailsPage';
import AboutUs from './pages/AboutUs';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import CandidatesPage from './pages/CandidatesPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidate-solutions" element={<CandidateSolutions />} />
          <Route path="/voter-solutions" element={<VoterSolutions />} />
          <Route path="/register" element={<CandidateRegistration />} />
          <Route path="/candidate/:id" element={<CandidateDetailsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/candidatesPage" element={<CandidatesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
    </Router>
  );
}

export default App;
