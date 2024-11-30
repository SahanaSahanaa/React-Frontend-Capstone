import React from 'react';
import SpecialsCard from './SpecialsCard';
import './styles.css';

function Specials() {
  const specials = [
    {
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese...',
      image: '/image_icon/greek salad.jpg',
      
      
    },
    {
      name: 'Bruschetta',
      price: '$5.89',
      description: 'Our Bruschetta is made from grilled bread smeared with garlic...',
      image: '/image_icon/bruchetta.svg',
    },
    {
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book...',
      image: '/image_icon/lemon dessert.jpg',
    },
  ];

  return (
    <section className="specials">
      <h1>This Week's Specials!  <button className="online-menu-button">Online Menu</button> </h1>

      <br/>
      <div className="specials-container">
      
        {specials.map((item, index) => (
          <SpecialsCard key={index} item={item}        
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
