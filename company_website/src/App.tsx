import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Message from './pages/Message.tsx';
import Business from './pages/Business.tsx';
import Recruit from './pages/Recruit.tsx';
import Contact from './pages/Contact.tsx';
import './App.css';

function App() {
  return (
    <Router basename="/company_website">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/message" element={<Message />} />
            <Route path="/business" element={<Business />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
