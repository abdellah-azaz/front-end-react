import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditSalle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const salle = location.state;

  const [formData, setFormData] = useState({
    id: salle.id,
    libelle: salle.libelle,
    statut: salle.statut,
    nbr_places: salle.nbr_places,
    matiere_code: salle.matiere?.id || "",
    categorie_code: salle.categorie?.id || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/ProduitEJBdyna/api/salles/modifierSalle/${formData.matiere_code}/${formData.categorie_code}/${formData.statut}/${formData.libelle}/${formData.nbr_places}`
      )
      .then(() => {
        alert("Salle modifiée avec succès !");
        navigate("/");
      })
      .catch((err) => {
        alert(`Erreur lors de la modification : ${err.message}`);
      });
  };

  return (
    <div className="edit-container">
      <h1>Modifier la Salle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Libellé</label>
          <input
            type="text"
            name="libelle"
            value={formData.libelle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Statut</label>
          <input
            type="text"
            name="statut"
            value={formData.statut}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre de Places</label>
          <input
            type="number"
            name="nbr_places"
            value={formData.nbr_places}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Code Matière</label>
          <input
            type="number"
            name="matiere_code"
            value={formData.matiere_code}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Catégorie</label>
          <input
            type="number"
            name="categorie_code"
            value={formData.categorie_code}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default EditSalle;
