import React, { useState } from 'react';
import axios from 'axios';
import "./AddSalle.css";

const AddSalle = () => {
  const [matiereCode, setMatiereCode] = useState('');
  const [categorieCode, setCategorieCode] = useState('');
  const [statut, setStatut] = useState('');
  const [libelle, setLibelle] = useState('');
  const [nbrPlaces, setNbrPlaces] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crée un objet pour envoyer les données à l'API
    const salleData = {
      matiere_code: matiereCode,
      categorie_code: categorieCode,
      statut: statut,
      libelle: libelle,
      nbr_places: nbrPlaces,
    };

    // Envoie la requête POST avec Axios
    axios
      .post(`http://localhost:8080/ProduitEJBdyna/api/salles/addSalle/${matiereCode}/${categorieCode}/${statut}/${libelle}/${nbrPlaces}`)
      .then((response) => {
        setMessage('Salle ajoutée avec succès!');
      })
      .catch((error) => {
        setMessage('Erreur lors de l\'ajout de la salle.');
      });
  };

  return (
    <div className="add-salle-container">
      <h2>Ajouter une Salle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
       
          <input
            type="number"
            value={matiereCode}
            placeholder='entrer votre code matiere'
            onChange={(e) => setMatiereCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="number"
            value={categorieCode}
            placeholder='entrer votre code Categorie'
            onChange={(e) => setCategorieCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
      
          <input
            type="text"
            value={statut}
            placeholder='disponible/pas disponible'
            onChange={(e) => setStatut(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
       
          <input
            type="text"
            value={libelle}
            placeholder='entrer le libelle de votre salle'
            onChange={(e) => setLibelle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        
          <input
            type="number"
            value={nbrPlaces}
            placeholder='entrer le nombre de places'
            onChange={(e) => setNbrPlaces(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter Salle</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddSalle;
