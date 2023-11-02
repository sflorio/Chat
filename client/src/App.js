import './App.css';
import './boostrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './componentes/Chat';
import Navbar from "./componentes/Menu"
import TestCommandPanel from './componentes/TestCommandPanel';

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
