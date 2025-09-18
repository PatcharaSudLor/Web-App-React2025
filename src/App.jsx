import './App.css';
//npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bmi from './Bmi';
import Hello from './Hello';
import Home from './Home';
import About from './About';
import List from './List';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Welcome to My website</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/bmi">Bmi Calculator</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/hello?name=Patchara&surname=Subpravat">Hello Patchara</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
