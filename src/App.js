import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Num1 from './component/Num1';
import Footer from './component/Footer';
// import Operations from './component/Operations'

function App() {
  return (
    <div className="App">
      <Header title="Calculator" />
      <Num1 />
      {/* <Operations /> */}
      <Footer text="created by Michael Sabzevari" />
    </div>
  );
}

export default App;
