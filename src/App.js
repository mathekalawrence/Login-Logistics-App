//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/main" element={<Main/>} />

    </Routes>

    </BrowserRouter>
     


  );
}

export default App;
