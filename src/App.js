import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>Home Page</div>

    //react fragment tags <> </>

    <>
    <Header/>
    <nav>
      <ul>
        <li> <a href="Home">Home</a> </li>
        <li><a href="About">About</a></li>
        <li><a href="Menu">Menu</a></li>
        <li><a href="Reservation">Reservation</a></li>
        <li><a href="Order">Order online</a></li>
        <li><a href="Login">Login</a></li>
      </ul>
    </nav>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
