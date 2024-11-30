import React from 'react';
import './styles.css';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <img src="/image_icon/restauranfood.jpg" alt="Delicious food" style={{ width: "300px", height: "300px" }} />
    </section>
  );
}

export default CallToAction;
