import React from 'react';
import './styles.css';

function SpecialsCard({ item }) {
  return (
    <div className="special-card">
      <img src={item.image} alt={item.name} className="special-image" />
      <div className="special-details">
        <h3>{item.name} <span>{item.price}</span></h3>
        <p>{item.description}</p>
        <button className="order-button">Order a Delivery 🚚</button>
      </div>
    </div>
  );
}

export default SpecialsCard;
