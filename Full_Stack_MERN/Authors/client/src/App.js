import './App.css';
import Home from "./views/Home";
import UpdateView from "./views/UpdateView";
import CreateView from "./views/CreateView";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NotFound from './views/NotFound'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home / Read*/}
          <Route path="/" element= {<Navigate to="/authors" />} />
          <Route path="/authors" element={<Home/>} />  

          {/* Create */}
          <Route path="/authors/new" element = {<CreateView/>} />

          {/* Update */}
          <Route path="/authors/edit/:id" element = {<UpdateView/>} />

          {/* Not Found */}
          <Route path="/authors/notfound" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
