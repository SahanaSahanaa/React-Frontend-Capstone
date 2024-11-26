import React, { useReducer } from "react";
import BookingPage from "./BookingPage";

const initializeTimes = () => {
  // Define the initial available times
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {

  if (action.type === "UPDATE_TIMES") {
    return state;
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
 return (
    <>
    <div>
    <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
  </div>

 <main>
    <div className="container">

      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/350"
            alt="Bruschetta served on a slate platter"
          />
        </div>
      </section>
      <section className="specials">
        <h3>This week's specials!</h3>
        <button className="menu-btn">Online Menu</button>
        <div className="specials-cards">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Greek Salad"
            />
            <h4>Greek Salad</h4>
            <p className="price">$12.99</p>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button className="delivery-btn">Order a delivery 🚴</button>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Bruschetta"
            />
            <h4>Bruschetta</h4>
            <p className="price">$5.89</p>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <button className="delivery-btn">Order a delivery 🚴</button>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Lemon Dessert"
            />
            <h4>Lemon Dessert</h4>
            <p className="price">$5.00</p>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <button className="delivery-btn">Order a delivery 🚴</button>
          </div>
        </div>
      </section>
    </div>
 </main>
 </>
 );

}
export default Main;