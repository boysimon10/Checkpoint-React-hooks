import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = ({ addFilm }) => {
const [nouveauFilm, setNouveauFilm] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: 0,
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilm(nouveauFilm);
    setNouveauFilm({
        titre: '',
        description: '',
        posterURL: '',
        note: 0,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Ajouter le film</button>
      </form>
    </div>
  );
};

export default AddMovie;
