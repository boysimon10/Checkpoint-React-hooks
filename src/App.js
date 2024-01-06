import React, { useState, useEffect } from 'react';
import Header from './components/Navbar'; // Import du composant Header
import MovieList from './components/MovieList'; // Import du composant MovieList
import Filter from './components/Filter'; // Import du composant Filter
import AddMovie from './components/AddMovie'; // Import du composant AddMovie
import MovieData from './components/MovieData'; // Import du composant MovieData
import 'bootstrap/dist/css/bootstrap.min.css';

// Définition du composant principal App
const App = () => {
  // Récupération des données de films depuis le composant MovieData
  const movies = MovieData();
  // Définition des états pour les films et les films filtrés
  const [films, setFilms] = useState(movies);
  const [filmsFiltres, setFilmsFiltres] = useState(movies);

  // Fonction pour filtrer les films en fonction du titre et de la note minimale
  const filtrerFilms = (filtreTitre, filtreNote) => {
    const filmsFiltres = films.filter((film) => {
      return (
        film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) && // Filtrage par titre
        film.note >= parseInt(filtreNote) // Filtrage par note minimale
      );
    });
    setFilmsFiltres(filmsFiltres); // Met à jour les films filtrés
  };

  // Mettre à jour les films filtrés lorsque l'état films change
  useEffect(() => {
    setFilmsFiltres(films);
  }, [films]);

  // Fonction pour ajouter un nouveau film à la liste
  const addFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]); // Ajoute un film à l'état films
    setFilmsFiltres([...films, nouveauFilm]); // Ajoute un film à l'état des films filtrés
  };

  // Rendu des composants - Header, Filter, MovieList, AddMovie
  return (
    <>
    <Header/> {/* Rendu du composant Header */}
    <div className="container mt-4">
      <Filter handleFilter={filtrerFilms} /> {/* Rendu du composant Filter */}
      <MovieList films={filmsFiltres} /> {/* Rendu du composant MovieList avec les films filtrés */}
      <AddMovie addFilm={addFilm} /> {/* Rendu du composant AddMovie */}
    </div>
    </>
  );
};

export default App; // Export du composant App par défaut
