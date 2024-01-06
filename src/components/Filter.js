import React, { useState } from 'react';

// Composant Filter prenant en paramètre la fonction handleFilter pour filtrer les films
const Filter = ({ handleFilter }) => {
  // États pour le filtre par titre et par note
  const [filtreTitre, setFiltreTitre] = useState('');
  const [filtreNote, setFiltreNote] = useState(0);

  // Gestion du changement de valeur du filtre par titre
  const handleChangeTitre = (e) => {
    setFiltreTitre(e.target.value);
    // Appel de la fonction de filtrage avec le titre filtré et la note actuelle
    handleFilter(e.target.value, filtreNote);
  };

  // Gestion du changement de valeur du filtre par note
  const handleChangeNote = (e) => {
    setFiltreNote(e.target.value);
    // Appel de la fonction de filtrage avec le titre actuel et la note filtrée
    handleFilter(filtreTitre, e.target.value);
  };

  // Rendu des éléments d'entrée pour le filtrage par titre et note
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Champ d'entrée pour filtrer par titre */}
        <div className="col-md-6 mb-3">
          <label htmlFor="titreInput" className="form-label">Filtrer par titre</label>
          <input
            type="text"
            className="form-control"
            id="titreInput"
            placeholder="Entrez le titre"
            value={filtreTitre}
            onChange={handleChangeTitre}
          />
        </div>
        {/* Champ d'entrée pour filtrer par note */}
        <div className="col-md-6 mb-3">
          <label htmlFor="noteInput" className="form-label">Filtrer par note</label>
          <input
            type="number"
            className="form-control"
            id="noteInput"
            placeholder="Entrez la note"
            value={filtreNote}
            onChange={handleChangeNote}
            min={0} // Note minimale autorisée
            max={10} // Note maximale autorisée
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
