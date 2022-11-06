import './App.css';
import Main from "./views/Main";
import ViewOne from "./views/ViewOne";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element= {<Navigate to="/products" />} />

          {/* Create and Read */}
          <Route path="/products" element={<Main/>} />  
          <Route path="/products/:id" element = {<ViewOne/>} />

          {/* Update */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
