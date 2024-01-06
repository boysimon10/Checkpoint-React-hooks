import React from 'react';
import MovieCard from './MovieCard'; // Import du composant MovieCard

// Composant MovieList prenant en paramètre les films à afficher
const MovieList = ({ films }) => {
  return (
    <div className="liste-films d-flex flex-wrap justify-content">
      {/* Boucle sur les films pour créer des cartes de films avec MovieCard */}
      {films.map((film, index) => (
        <MovieCard
          key={index} // Clé unique pour chaque carte de film
          titre={film.titre} // Propriété titre du film
          description={film.description} // Propriété description du film
          posterURL={film.posterURL} // Propriété URL du poster du film
          note={film.note} // Propriété note du film
        />
      ))}
    </div>
  );
};

export default MovieList; // Export du composant MovieList par défaut
