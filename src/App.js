
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
