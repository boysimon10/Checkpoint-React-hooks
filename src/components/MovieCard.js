import React from 'react';

const MovieCard = ({ titre, description, posterURL, note }) => {
    return (
    <div className="film-card">
        <img src={posterURL} alt={titre} />
        <h3>{titre}</h3>
        <p>{description}</p>
        <p>Note: {note}</p>
    </div>
);
};

export default MovieCard;
