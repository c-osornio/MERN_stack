import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import List from './components/List'
import View from './components/View'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pizza"/>}/>
          <Route path="/pizza" element={<List/>}/>
          <Route path="/pizza/:id" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
