import './App.css';
import Home from './components/Home'
import Display from './components/Display'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:number" element={<Display />} />
          <Route path="/:number/:color/:bgColor" element={<Display />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
