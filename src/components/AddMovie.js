import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Composant AddMovie pour ajouter un nouveau film
const AddMovie = ({ addFilm }) => {
  // État local pour le nouveau film à ajouter
  const [nouveauFilm, setNouveauFilm] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: 0,
  });

  // Fonction pour gérer les changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value });
  };

  // Fonction pour soumettre le formulaire et ajouter le nouveau film
  const handleSubmit = (e) => {
    e.preventDefault();
    addFilm(nouveauFilm); // Appel de la fonction addFilm pour ajouter le nouveau film
    // Réinitialisation des champs après l'ajout du film
    setNouveauFilm({
      titre: '',
      description: '',
      posterURL: '',
      note: 0,
    });
  };

  // Rendu du formulaire d'ajout de film
  return (
    <div className="container mt-4">
      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ pour le titre du film */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Titre du film"
            name="titre"
            value={nouveauFilm.titre}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour la description du film */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Description du film"
            name="description"
            value={nouveauFilm.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour l'URL du poster du film */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="URL du poster"
            name="posterURL"
            value={nouveauFilm.posterURL}
            onChange={handleChange}
            required
          />
        </div>
        {/* Champ pour la note du film */}
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Note du film"
            name="note"
            min={0}
            max={10}
            value={nouveauFilm.note}
            onChange={handleChange}
            required
          />
        </div>
        {/* Bouton pour ajouter le film */}
        <button type="submit" className="btn btn-primary">Ajouter le film</button>
      </form>
    </div>
  );
};

export default AddMovie; 