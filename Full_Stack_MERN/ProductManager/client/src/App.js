import './App.css';
import ProductForm from "./components/ProductForm";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Navigate to="/products/new" />} />
          <Route path="/products/new" element={<ProductForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
