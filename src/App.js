// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieData from './components/MovieData';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const movies = MovieData();
  const [films, setFilms] = useState(movies);
  const [filmsFiltres, setFilmsFiltres] = useState(movies);

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

  const addFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]);
    setFilmsFiltres([...films, nouveauFilm]); // Mise à jour des films filtrés après l'ajout d'un nouveau film
  };

  return (
    <div className="container mt-4">
      <h1>Application de Cinéma</h1>
      <Filter handleFilter={filtrerFilms} />
      <MovieList films={filmsFiltres} />
      <AddMovie addFilm={addFilm} />
    </div>
  );
};

export default App;
