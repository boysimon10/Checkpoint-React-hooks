import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ films }) => {
return (
    <div className="liste-films d-flex flex-wrap justify-content">
        {films.map((film, index) => (
        <MovieCard
            key={index}
            titre={film.titre}
            description={film.description}
            posterURL={film.posterURL}
            note={film.note}
            
        />
        ))}
    </div>
);
};

export default MovieList;
