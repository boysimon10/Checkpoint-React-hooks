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
    <div className="filtrer">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filtreTitre}
        onChange={handleChangeTitre}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={filtreNote}
        onChange={handleChangeNote}
      />
    </div>
  );
};

export default Filter;
