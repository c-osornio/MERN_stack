import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="body">
        <Body/>
        <Body/>
        <Body/>
        <Body/>
      </div>
      <Footer />
    </div >
  );
}

export default App;