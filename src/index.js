import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const Header = () => {
  return <header className='header'>
    <h1>Musanga</h1>
  </header>
}
const Menu = () => {
  return <main className='menu'>
    <h2>Our Menu</h2>
    <div className='foods'>
      <Food />
    </div>

  </main>
}
const Food = () => {
  return <div className='food'>
    <img src={'/assets/corn.jpg'} />
    <div>
      <h3>Corn</h3>
      <p>Corn and Cucumber</p>
    </div>

  </div>
}
const Footer = () => {
  return (
    <footer className='footer'>We are currently opened</footer>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

