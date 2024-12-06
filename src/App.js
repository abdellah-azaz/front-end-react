import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplaySalles from './components/DisplaySalles';
import EditSalle from './components/EditSalle';
import AddSalle from './components/AddSalle';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='app'>
      {/* Vos composants */}
      <Navbar />

      {/* Footer */}
      <footer className="footer">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </footer>
    </div>
  );
}

export default App;