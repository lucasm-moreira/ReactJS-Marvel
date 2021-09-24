import React from "react";
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  const myHeader = new Headers();

  myHeader.append("Access-Control-Allow-Origins", "*");
  
  return (
    <div className="App">
      <Hero />
      <Footer />
  </div>
  );
}

export default App;
