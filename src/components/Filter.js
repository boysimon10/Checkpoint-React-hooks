import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
    const [filtreTitre, setFiltreTitre] = useState('');
    const [filtreNote, setFiltreNote] = useState(0);

    const handleChangeTitre = (e) => {
    setFiltreTitre(e.target.value);
    handleFilter(e.target.value, filtreNote);
};

  const handleChangeNote = (e) => {
    setFiltreNote(e.target.value);
    handleFilter(filtreTitre, e.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="row">
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
        <div className="col-md-6 mb-3">
          <label htmlFor="noteInput" className="form-label">Filtrer par note</label>
          <input
            type="number"
            className="form-control"
            id="noteInput"
            placeholder="Entrez la note"
            value={filtreNote}
            onChange={handleChangeNote}
            min={0}
            max={10} 
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
