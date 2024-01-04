import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [films, setFilms] = useState([
    {
      titre: 'Film 1',
      description: 'Description du film 1',
      posterURL: 'url-du-poster-1',
      note: 4,
    },
    {
      titre: 'Film 2',
      description: 'Description du film 2',
      posterURL: 'url-du-poster-2',
      note: 3,
    },
    // ... autres films
  ]);

  const [filmsFiltres, setFilmsFiltres] = useState(films);

  const [nouveauFilm, setNouveauFilm] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: 0,
  });

  const filtrerFilms = (filtreTitre, filtreNote) => {
    const filmsFiltres = films.filter((film) => {
      return (
        film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) &&
        film.note >= filtreNote
      );
    });
    setFilmsFiltres(filmsFiltres);
  };

  useEffect(() => {
    setFilmsFiltres(films);
  }, [films]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({
      ...nouveauFilm,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>Application de Cinéma</h1>
      <Filter handleFilter={filtrerFilms} />
      <MovieList films={filmsFiltres} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilms([...films, nouveauFilm]);
          setNouveauFilm({
            titre: '',
            description: '',
            posterURL: '',
            note: 0,
          });
        }}
      >
        <input
          type="text"
          placeholder="Titre du film"
          name="titre"
          value={nouveauFilm.titre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Description du film"
          name="description"
          value={nouveauFilm.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="URL du poster"
          name="posterURL"
          value={nouveauFilm.posterURL}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Note du film"
          name="note"
          value={nouveauFilm.note}
          onChange={handleChange}
          required
        />
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
};

export default App;
