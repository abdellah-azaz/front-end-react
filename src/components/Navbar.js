import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSalle from "./AddSalle";
import DisplaySalles from "./DisplaySalles";
import Acceuil from "./Acceuil";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
         
          <ul className="nav-links">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/addSalle">Ajouter une Salle</Link>
            </li>
            <li>
              <Link to="/displaySalles">Afficher les Salles</Link>
            </li>
          </ul>
        </nav>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/addSalle" element={<AddSalle />} />
            <Route path="/displaySalles" element={<DisplaySalles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
