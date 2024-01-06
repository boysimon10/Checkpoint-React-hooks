import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ titre, description, posterURL, note }) => {
  return (
        <Card  style={{ maxWidth: '18rem', margin: '1em' }}>
          <Card.Img variant="top" src={posterURL} alt={titre} />
          <Card.Body>
            <Card.Title>{titre}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{note} / 10</Card.Text>
          </Card.Body>
        </Card>
  );
};

export default MovieCard;
