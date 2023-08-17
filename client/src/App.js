import logo from './logo.svg';
import './App.css';
import './boostrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './components/Chat';
import Navbar from "./components/Menu"

import TestCommandPanel from './components/TestCommandPanel';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Chat />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/TestCommandPanel' element={<TestCommandPanel />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
