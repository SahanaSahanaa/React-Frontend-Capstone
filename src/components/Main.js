const Main = ()=>{
 return (
 <main>
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="Little Lemon Logo" />
          <span className="logo-text">LITTLE LEMON</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
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
 );

}
export default Main;