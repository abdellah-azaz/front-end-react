import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DisplaySalles = () => {
  const [salles, setSalles] = useState([]);
  const [filteredSalles, setFilteredSalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchSalles();
  }, []);

  const fetchSalles = () => {
    axios
      .get("http://localhost:8080/ProduitEJBdyna/api/salles/afficher")
      .then((response) => {
        setSalles(response.data);
        setFilteredSalles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const deleteSalle = (id) => {
    axios
      .delete(`http://localhost:8080/ProduitEJBdyna/api/salles/${id}`)
      .then(() => {
        alert("Salle supprimée avec succès !");
        fetchSalles();
      })
      .catch((err) => {
        alert(`Erreur lors de la suppression : ${err.message}`);
      });
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    const filtered = salles.filter((salle) =>
      salle.libelle.toLowerCase().includes(query)
    );
    setFilteredSalles(filtered);
  };

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h1>Liste des Salles</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher par libellé..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <table className="salle-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>ID</th>
            <th>Libellé</th>
            <th>Statut</th>
            <th>Nombre de Places</th>
            <th>Catégorie</th>
            <th>Matière</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalles.map((salle) => (
            <tr key={salle.id}>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteSalle(salle.id)}
                >
                  Supprimer
                </button>
                <button
                  className="edit-button"
                  onClick={() => navigate(`/editSalle/${salle.id}`, { state: salle })}
                >
                  Modifier
                </button>
              </td>
              <td>{salle.id}</td>
              <td>{salle.libelle}</td>
              <td>{salle.statut}</td>
              <td>{salle.nbr_places}</td>
              <td>{salle.categorie?.libelle || "N/A"}</td>
              <td>{salle.matiere?.libelle || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplaySalles;
