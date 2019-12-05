import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Calculator from './component/Calculator';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Calculator" />
      <Calculator />
      <Footer text="created by Michael Sabzevari" />
    </div>
  );
}

export default App;
