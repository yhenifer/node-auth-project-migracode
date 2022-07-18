import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from "./components/Registration";
import Header from "./components/Header";

function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>    
  </div>
  );
    
}

export default App;
