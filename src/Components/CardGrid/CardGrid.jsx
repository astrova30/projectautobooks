import React from 'react';
import './CardGrid.css'; 
import image1 from '../Assets/educ.png';
import image2 from '../Assets/ocio.png';  

const CardGrid = () => {
  const cards = [
    { id: 1, image: image1, title: 'Libros de apoyo investigativo' },
    { id: 2, image: image2, title: 'Libros para tu tiempo libre' },
  ];

  return (
    <div className="card-grid">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;