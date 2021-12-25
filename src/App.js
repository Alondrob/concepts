
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import Form from './components/Form'
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
   
      <Router>
        <NavBar />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    
    </>
 
    
  );
}

export default App;
