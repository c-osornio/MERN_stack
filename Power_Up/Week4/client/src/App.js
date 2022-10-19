import './App.css';
import All from './components/All'
import Footer from './components/Footer'
import Nav from './components/Nav'
import One from './components/One'
import NotFound  from './components/NotFound'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Navigate to="/desserts" />}/>
          <Route path="/desserts" element={<All />} />
          <Route path="/desserts/:id" element= {<One />} />
          <Route path="/notfound" element={<NotFound/>} />
          <Route path="/*" element = {<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
